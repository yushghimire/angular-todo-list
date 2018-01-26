import {
  Component,
  Output,
  Input,
  EventEmitter,
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';

import Todo from '../todo';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnChanges {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() showEditBlock = new EventEmitter<Todo>();

  ngOnChanges() {
  }

  deleteItem() {
    this.deleteTodo.emit(this.todo);
  }

  editItem() {
    this.showEditBlock.emit(this.todo);
  }
}
