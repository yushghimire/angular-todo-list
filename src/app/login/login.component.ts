import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'body',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.createFormControl();
    this.createForm();

    // for checking purpose of the observables
    this.loginForm.valueChanges
      .filter(data => this.loginForm.valid)
      .subscribe(data => console.log(JSON.stringify(data)));
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }


  createFormControl() {
    this.email = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required,
    ]);
  }

}

