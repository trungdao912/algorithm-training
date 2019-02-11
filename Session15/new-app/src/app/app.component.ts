import { Component, OnInit } from '@angular/core';
import { User } from './User.model';
import { TableServiceService } from './table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'new-app';
  data;
  value: string;
  constructor(private tableService: TableServiceService) {}

  ngOnInit() {
    this.data = this.tableService.getData();
  }

  changeValue($event) {
    this.value = $event.target.value;
    this.data = this.tableService.sortByName(this.value);
  }
}
