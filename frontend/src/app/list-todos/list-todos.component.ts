import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public todos: Todo[];
  public message: string;

  constructor(
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.refreshTodos();
  }


  private refreshTodos() {
    this.todoService.getUserTodos("dima")
      .subscribe(response => {
        console.log(response);
        this.todos = response;
      });
  }

  public deleteTodo(id: number) {
    this.todoService.deleteTodo("dima", id).subscribe(response => {
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
