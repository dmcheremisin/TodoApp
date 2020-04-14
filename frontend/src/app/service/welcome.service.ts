import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WelcomeMessage } from '../model/welcomeMessage';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient) { }

  public getWelcomeMessage() {
    return this.http.get<WelcomeMessage>("http://localhost:8080/hello");
  }

  public getNamedWelcomeMessage(name: string) {
    return this.http.get<WelcomeMessage>(`http://localhost:8080/hello/${name}`);
  }
}
