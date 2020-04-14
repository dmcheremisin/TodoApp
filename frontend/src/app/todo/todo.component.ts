import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/todo';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  userName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: TodoService,
              private router: Router,
              private authService: BasicAuthenticationService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userName = this.authService.getUserName();

    if (this.id != 0) {
      this.service.getTodo(this.userName, this.id)
        .subscribe(resp => this.todo = resp);
    } else {
      this.todo = new Todo(0, '', new Date(), false);
    }
  }

  saveTodo() {
    if (this.todo.id != 0) {
      this.service.updateTodo(this.userName, this.id, this.todo)
        .subscribe(resp => {
          this.todo = resp;
          this.router.navigate(['todos']);
        });
    } else {
      this.service.createTodo(this.userName, this.todo)
        .subscribe(resp => {
          this.router.navigate(['todos']);
        });
    }
  }

}
