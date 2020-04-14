import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {ActivatedRoute} from '@angular/router';
import {WelcomeService} from '../service/welcome.service';
import {AuthMessage} from '../model/authMessage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string = '';
  welcomeMessage: string;

  constructor(private router: ActivatedRoute, private welcomeService: WelcomeService) {
  }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name'];
  }

  public getWelcomeMessage() {
    this.welcomeService.getNamedWelcomeMessage(this.name)
      .subscribe(
        res => this.handleSuccessResponse(res),
        error => this.handleErrorResponse(error));
  }

  private handleSuccessResponse(response: AuthMessage): void {
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error: any): void {
    this.welcomeMessage = error.error.message;
  }

}
