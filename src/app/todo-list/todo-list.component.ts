import {
  Component,
  Input,
  OnChanges,
  OnInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';

import Todo from '../todo';

import { TodoService } from '../services/todo.service';
import { TodoComponent } from 'app/todo/todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  hide: boolean;
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.hide = true;
  }

  ngOnInit() {
    const PAGE_NUMBER = 1;

    this.todoService.getData(PAGE_NUMBER).subscribe(data => {
      this.todos = data;
    });
  }

  toggle() {
    this.hide = !this.hide;
  }
}
