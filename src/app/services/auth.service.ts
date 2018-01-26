import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpRequest, HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

import { API_ROOT } from '../constants';


@Injectable()
export class AuthService {
  apiRoot: string;
  newAccessToken: string;
  readonly token: Observable<string>;
  readonly refreshToken: Observable<string>;
  cachedRequests: Array<HttpRequest<any>> = [];
  tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(undefined);

  constructor(private http: HttpClient) {
    this.apiRoot = API_ROOT;
    this.refreshToken = Observable.defer(() => {
      this.tokenSubject.next(undefined);

      return this.getRefreshToken;
    })
  }

  getToken() {

    return localStorage.getItem('accessToken');
  }

  addAccessToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    const authHeader = token;

    return req.clone({ headers: req.headers.set('Authorization', authHeader) });
  }

  collectFailedRequest(request): void {
    this.cachedRequests.push(request);

    console.log(this.cachedRequests);
  }

  callFailedRequest(token: string, next): void {
    let request = this.cachedRequests.pop();
    console.log(token);
    request = request.clone({ headers: request.headers.set('Authorization', token) });
    console.log(request);

    this.http.request(request)
      .subscribe(data => console.log(data));
  }

  getRefreshToken() {
    const apiURL = `${this.apiRoot}/refresh`;
    const refreshToken = localStorage.getItem('refreshToken');

    return this.http.get(apiURL, { headers: new HttpHeaders().set('Authorization', refreshToken) });
  }

  getNewAccessToken(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    this.getRefreshToken()
      .subscribe(res => {
        console.log(res['accessToken']);
        this.newAccessToken = res['accessToken'];
        this.callFailedRequest(this.newAccessToken, next);
      });

    return Observable.of(this.newAccessToken).delay(200);
  }

  retryFailedRequest(): void {
    console.log('trying failed token');
  }
}
