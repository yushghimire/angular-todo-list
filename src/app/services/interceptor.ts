import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector, forwardRef } from '@angular/core';

import { API_ROOT } from '../constants';
import { AuthService } from './auth.service';
import { TodoService } from 'app/services/todo.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean;
  authService: AuthService;

  constructor(private inj: Injector) {
    this.isRefreshingToken = false;

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    this.authService = this.inj.get(AuthService);

    return this
      .authService.token
      .map(token => req.clone({ headers: req.headers.set('Authorization', token) }));
  }



  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      this.tokenSubject.next(undefined);

      return this.authService.getNewAccessToken(req, next)
        .switchMap((newToken: string) => {
          if (newToken) {
            this.tokenSubject.next(newToken);

            return next.handle(this.addAccessToken(req, newToken));
          }
        })
        .finally(() => this.isRefreshingToken = false);
    }
  }
}