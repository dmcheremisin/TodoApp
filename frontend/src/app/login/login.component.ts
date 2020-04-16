import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JwtAuthenticationService} from "../service/jwt-authentication.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "Invalid credentials";

  user: User;
  invalidCredentials = false;

  constructor(private router: Router,
              private authService: JwtAuthenticationService) {
  }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn())
      this.router.navigate(["welcome", this.authService.getUserName()]);

    this.user = new User(null, null);
  }

  public login(): void {
    this.authService.executeAuthentication(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.invalidCredentials = false;
          this.router.navigate(["welcome", this.user.username]);
        },
        error => {
          console.log(error);
          this.invalidCredentials = true;
        }
      );
  }

}
