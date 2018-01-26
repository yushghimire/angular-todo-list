import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

export class UserService {
  isAuth: boolean;

  constructor() {
    this.isAuth = Boolean(localStorage.getItem('isAuth'));
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}

export class AlwaysAuthGuard implements CanActivate {

  canActivate() {

    return true;
  }
}

@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate() {

    if (this.userService.isLoggedIn()) {

      return true;
    }
    else {
      window.alert('Please Login First');
      this.router.navigate(['/login']);
    }
  }
};
