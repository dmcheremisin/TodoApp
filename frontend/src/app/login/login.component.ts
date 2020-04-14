import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "Invalid credentials";

  username: string = "";
  password: string = "";
  invalidCredentials = false;

  constructor(private router: Router,
              private basicAuthService: BasicAuthenticationService) {
  }

  ngOnInit(): void {
  }

  public handleBasicLogin(): void {
    this.basicAuthService.executeAuthentication(this.username, this.password)
      .subscribe(
        response => {
          console.log(response);
          this.invalidCredentials = false;
          this.router.navigate(["welcome", this.username]);
        },
        error => {
          console.log(error);
          this.invalidCredentials = true;
        }
      );
  }

}
