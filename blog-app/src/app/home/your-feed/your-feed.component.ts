import { Feed } from './../../models/feed.model';
import { Article } from 'src/app/models/article.model';
import { DataService } from './../../data.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.css']
})
export class YourFeedComponent implements OnInit {
  authenticated: boolean = false;
  articleList: Feed[];
  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit() {
    this.data.getUserArticles().subscribe((data: { articles: Feed[] }) => {
      this.articleList = data.articles;
    })
  }


}
