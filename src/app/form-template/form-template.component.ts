import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German'
  ];
  model: SignUp = new SignUp();

  constructor() { }

  ngOnInit() {
  }

}

class SignUp {
  constructor(public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = '') {

  }
}
