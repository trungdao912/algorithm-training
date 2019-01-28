import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class DataService {
  private todoThings: Todo[] = [
    new Todo(Math.floor(Math.random() * 100), 'Do homework', false),
    new Todo(Math.floor(Math.random() * 100), 'Playing videogames', false)
  ];

  constructor() { }

  addTodo(toDo: Todo) {
    this.todoThings.push(toDo);
  }

  getTodo(id: number): Todo {
    for (let i = 0; i < this.todoThings.length; i++) {
      if (this.todoThings[i].id === id) {
        return this.todoThings[i];
      }
    }
  }

  getTodos() {
    return this.todoThings;
  }

  deleteTodo(id: number) {
    this.todoThings.map((todoThing, index) => {
      if (todoThing.id === id) {
        this.todoThings.splice(index, 1);
      }
    });
  }

}
