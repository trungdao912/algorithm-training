import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spotify-app';
  value: string;

  constructor(private data: DataService) {

  }

  ngOnInit() {

  }

  onChange() {
    this.data.changeMessage(this.value);
  }
}
