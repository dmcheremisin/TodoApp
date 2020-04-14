import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthMessage} from '../model/authMessage';
import {API_URL} from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient) { }

  public getNamedWelcomeMessage(name: string) {
    return this.http.get<AuthMessage>(`${API_URL}/hello/${name}`);
  }
}
