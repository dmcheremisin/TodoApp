import {Component, OnInit} from '@angular/core';
import {JwtAuthenticationService} from "../service/jwt-authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;

  constructor(private router: Router,
              private authService: JwtAuthenticationService) {
  }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  navigateToWelcome() {
    this.router.navigate(["welcome", this.username]);
  }
}
