import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) : boolean {
    if(username === "dima" && password === "fun") {
      sessionStorage.setItem("username", username);
      return true;
    } 
    return false;
  }

  public isUserLoggedIn(): boolean {
    return !(sessionStorage.getItem("username") === null);
  }

  public logout() {
    sessionStorage.removeItem("username");
  }
}

