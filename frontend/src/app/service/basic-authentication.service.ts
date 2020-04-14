import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthMessage} from "../model/authMessage";
import {map} from "rxjs/operators";
import {API_URL} from "../app.constants";

export const TOKEN = "token";
export const USER_NAME = "userName";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  executeAuthentication(userName: string, password: string) {
    let basicAuthHeader = 'Basic ' + window.btoa(userName + ':' + password);
    let authHeader = new HttpHeaders({
      Authorization: basicAuthHeader
    });
    return this.http.get<AuthMessage>(`${API_URL}/auth`, {headers: authHeader})
      .pipe(map(data => {
        sessionStorage.setItem(USER_NAME, userName);
        sessionStorage.setItem(TOKEN, basicAuthHeader);
        return data;
      }))
  }

  public getUserName() {
    return sessionStorage.getItem(USER_NAME);
  }

  public getToken() {
    if(this.getUserName())
      return sessionStorage.getItem(TOKEN);
  }

  public isUserLoggedIn(): boolean {
    return !(this.getUserName() === null);
  }

  public logout() {
    sessionStorage.removeItem(USER_NAME);
    sessionStorage.removeItem(TOKEN);
  }
}

