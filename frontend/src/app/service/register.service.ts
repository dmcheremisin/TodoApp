import {API_URL} from "../app.constants";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  host = `${API_URL}/register`;

  constructor(private http: HttpClient) {
  }

  registerUser(user: User) {
    return this.http.post(this.host, user);
  }

}
