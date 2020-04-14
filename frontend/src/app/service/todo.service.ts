import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  host = `http://localhost:8080/users`;

  constructor(private http: HttpClient) { }

  getUserTodos(userName: string) {
    return this.http.get<Todo[]>(`${this.host}/${userName}/todos`);
  }

  getTodo(userName: string, id: number) {
    return this.http.get<Todo>(`${this.host}/${userName}/todos/${id}`);
  }

  deleteTodo(userName: string, id: number) {
    return this.http.delete(`${this.host}/${userName}/todos/${id}`);
  }

  updateTodo(userName: string, id: number, todo: Todo) {
    return this.http.put<Todo>(`${this.host}/${userName}/todos/${id}`, todo);
  }

  createTodo(userName: string, todo: Todo) {
    return this.http.post(`${this.host}/${userName}/todos`, todo);
  }

}
