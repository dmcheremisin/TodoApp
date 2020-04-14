import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public userName: string;
  public todos: Todo[];
  public message: string;

  constructor(
    private router: Router,
    private todoService: TodoService,
    private basicAuthService: BasicAuthenticationService) {}

  ngOnInit(): void {
    this.userName = this.basicAuthService.getUserName();
    this.refreshTodos();
  }


  private refreshTodos() {
    this.todoService.getUserTodos(this.userName)
      .subscribe(response => {
        console.log(response);
        this.todos = response;
      });
  }

  public deleteTodo(id: number) {
    this.todoService.deleteTodo(this.userName, id).subscribe(response => {
      this.message = `Todo with id '${id}' was deleted`;
      this.refreshTodos();
    });
  }

  public updateTodo(id: number) {
    this.router.navigate(["todos", id]);
  }

  createTodo() {
    this.router.navigate(["todos", 0]);
  }
}
