import {Component, OnInit} from '@angular/core';
import {JwtAuthenticationService} from "../service/jwt-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: JwtAuthenticationService) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
