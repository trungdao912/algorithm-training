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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllArticles().subscribe((val: { articles: Article[] }) => {
      this.articlesList = val.articles;
      console.log(this.articlesList);
    });
  }

}
