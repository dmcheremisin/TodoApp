import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {RegisterService} from "../service/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = "Invalid registration data";
  invalidData = false;

  user: User;

  constructor(private router: Router, private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.user = new User(null, null);
  }

  register() {
    console.log(this.user);
    this.registerService.registerUser(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.invalidData = false;
          this.router.navigate(["login"]);
        },
        error => {
          this.invalidData = true;
        }
      );
  }
}
