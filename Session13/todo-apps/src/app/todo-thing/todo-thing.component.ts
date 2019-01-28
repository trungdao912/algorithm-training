import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-thing',
  templateUrl: './todo-thing.component.html',
  styleUrls: ['./todo-thing.component.css']
})
export class TodoThingComponent implements OnInit {
  @Input() toDoThing;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onDeleteItem(id: number) {
    this.dataService.deleteTodo(id);
  }

  onToggleComplete(id: number) {
    this.dataService.getTodo(id).status = !this.dataService.getTodo(id).status;
  }

}
