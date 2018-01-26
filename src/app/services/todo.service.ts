import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Todo from '../todo';
import { API_ROOT } from '../constants';

@Injectable()
export class TodoService {
  todos: Object[];
  apiRoot: string;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.todos = [];
    this.loading = false;
    this.apiRoot = API_ROOT;
  }

  //  using promise
  // getData(PAGE_NUMBER) {
  //   this.loading = true;
  //   const promise = new Promise((resolve, reject) => {
  //     // const apiURL = `${this.apiRoot}/todos/${PAGE_NUMBER}`;
  //     const apiURL = `${this.apiRoot}/users`;

  //     this.http.get(apiURL)
  //       .map(res => console.log(res));
  //   });

  //   return promise;
  // }

  // using observable
  getData(PAGE_NUMBER): Observable<Todo[]> {
    const apiURL = `${this.apiRoot}/todos/${PAGE_NUMBER}`;

    return this.http.get(apiURL)
      .map(res => {

        return res['data'].map(item => {

          return new Todo(
            item.email,
            item.password,
            item.firstName,
            item.lastName
          );
        });
      });
  }

  postData(body): Observable<any> {
    const apiURL = `${this.apiRoot}/users`;

    return this.http.post(apiURL, body);
  }

//   deleteTodo(todo) {
//     const indexOf = this.todos.indexOf(todo);

//     this.todos.splice(indexOf, 1);
//   }
// }
}
