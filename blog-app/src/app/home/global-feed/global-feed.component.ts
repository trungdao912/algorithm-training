import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {

  articlesList: Article[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllArticles().subscribe((val: { articles: Article[] }) => {
      this.articlesList = val.articles;
      console.log(this.articlesList);
    });
  }
}
