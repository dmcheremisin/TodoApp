import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute, private service: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id != 0) {
      this.service.getTodo("dima", this.id)
        .subscribe(resp => this.todo = resp);
    } else {
      this.todo = new Todo(0, '', new Date(), false);
    }
  }

  saveTodo() {
    if (this.todo.id != 0) {
      this.service.updateTodo("dima", this.id, this.todo)
        .subscribe(resp => {
          this.todo = resp;
          this.router.navigate(['todos']);
        });
    } else {
      this.service.createTodo("dima", this.todo)
        .subscribe(resp => {
          this.router.navigate(['todos']);
        });
    }
  }

}
