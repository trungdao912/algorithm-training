import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  articles: {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    author: Author;
    favouritesCount: number;
    description: string
  }[];
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.data.getFavouriteArticle(params.username).subscribe((value: {
        articles: [
          {
            title: string;
            slug: string;
            body: string;
            createdAt: string;
            updatedAt: string;
            author: Author;
            favouritesCount: number;
            description: string
          }
        ];
      }) => {
        this.articles = value.articles;
      });
    });
  }

}
