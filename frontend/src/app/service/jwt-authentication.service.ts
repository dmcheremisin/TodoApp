import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {API_URL} from "../app.constants";

export const TOKEN = "token";
export const USER_NAME = "userName";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) {
  }

  executeAuthentication(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/auth`, {username, password})
      .pipe(map(data => {
        sessionStorage.setItem(USER_NAME, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
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

