import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "Invalid credentials";

  username: string = "dima";
  password: string = "";
  invalidCredentials = false;

  constructor(private router: Router, private hardcodedAuthService: HarcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  public handleLogin(): void {
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(["welcome", this.username]);
    } else {
      this.invalidCredentials = true;
    }
  }

}
