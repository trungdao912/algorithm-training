import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {

  articlesList: Article[];
  art: Article;
  favourited: boolean;
  constructor(private data: DataService, private router: Router, private change: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.getAllArticles().subscribe((val: { articles: Article[] }) => {
      this.articlesList = val.articles;
    });
  }

  onFavourite(slug: string, article: Article, favourite: HTMLButtonElement) {
    article.favoritesCount += 1;
    this.data.favouritePost(slug).subscribe((val: {article: Article}) => {
      // favourite.setAttribute('disabled', 'true');
      article.favorited = val.article.favorited;
    }, (err) => {
      article.favoritesCount -= 1;
    });
    this.articlesList = [...this.articlesList];
  }

  onUnfavourite(slug: string, article: Article) {
    article.favoritesCount -= 1;
    this.data.unfavouritePost(slug).subscribe((val: {article: Article}) => {
      article.favorited = val.article.favorited
    }, (err) => {
      article.favoritesCount += 1;
    });
  }
}
