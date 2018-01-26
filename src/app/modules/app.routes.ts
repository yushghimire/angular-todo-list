import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AlwaysAuthGuard, OnlyLoggedInUserGuard, UserService } from '../services/user.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo', component: TodoListComponent,
    canActivate: [OnlyLoggedInUserGuard, AlwaysAuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}