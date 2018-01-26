import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';
import { AuthService } from 'app/services/auth.service';
import { LoginService } from './services/login.service';
import { AppRoutingModule } from './modules/app.routes';
import { LoginComponent } from './login/login.component';
// import { NoopInterceptor } from './services/interceptor';
import { LoggerService } from './services/logger.service';
import { HeaderComponent } from './header/header.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { ConsoleLoggerService } from './services/console-logger.service';
import { CardHoverDirective } from './directives/todo/card-hover.directive';
import { FormTemplateComponent } from './form-template/form-template.component';
import { AlwaysAuthGuard, OnlyLoggedInUserGuard, UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    LoginComponent,
    HeaderComponent,
    TodoFormComponent,
    TodoListComponent,
    EditBlockComponent,
    ApiCallComponent,
    CardHoverDirective,
    FormTemplateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService,
    UserService,
    AuthService,
    LoginService,
    AlwaysAuthGuard,
    OnlyLoggedInUserGuard,
    { provide: LoggerService, useClass: ConsoleLoggerService }
    // { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
