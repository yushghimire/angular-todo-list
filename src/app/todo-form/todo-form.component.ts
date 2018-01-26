import { Component, Output, EventEmitter } from '@angular/core';

import Todo from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  model: Todo;

}
