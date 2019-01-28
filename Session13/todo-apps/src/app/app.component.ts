import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public toDoThings: Todo[];
  public title = 'Todo List';
  public todothing = '';
  constructor(private toDoService: DataService) {}

  ngOnInit() {
    this.toDoThings = this.toDoService.getTodos();
  }

  onAddToDoThing(todothing) {
    this.todothing = '';
    this.toDoService.addTodo(new Todo(Math.floor(Math.random() * 100), todothing, false));
  }
}
