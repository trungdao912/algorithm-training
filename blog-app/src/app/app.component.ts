import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-app';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUser().subscribe((data) => {
      console.log(data);
    })
  }
}
