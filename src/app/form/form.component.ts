import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  langs: string[] = [
    'english',
    'french',
    'german'
  ];
  myform: FormGroup;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  password: FormControl;
  language: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  onSubmit() {
    if (this.myform.valid) {
      this.myform.reset();
    }
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  createFormControl() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

}
