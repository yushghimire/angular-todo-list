import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_ROOT } from '../constants';

@Injectable()
export class LoginService {
  users: Object[];
  logging: boolean;
  apiRoot: string;

  constructor(private http: HttpClient) {
    this.apiRoot = API_ROOT;
  }

  login(values) {
    const apiURL = `${this.apiRoot}/login`;

    const req = this.http.post(apiURL, values);

    req.subscribe(res => {

      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('accessToken', res['data'].tokens.accessToken);
      localStorage.setItem('refreshToken', res['data'].tokens.refreshToken);
    });
  }
}
