import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {LogoutComponent} from './logout/logout.component';
import {TodoComponent} from './todo/todo.component';
import {HttpAuthInterceptorService} from "./service/http-auth-interceptor.service";
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
