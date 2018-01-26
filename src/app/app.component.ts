import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
