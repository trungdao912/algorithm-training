import { AuthService } from './../auth/auth.service';
import { Article } from './../models/article.model';
import { Author } from './../models/author.model';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articlesList: Article[];
  condition: boolean;
  loggedIn: boolean;
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuthentiCated();
    this.auth.isAuthenticate.subscribe((boo) => {
      this.condition = boo;
      if (this.condition) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  }

  onChange() {
    this.condition = !this.condition;
  }

}
