import { Author } from './../../models/author.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.css']
})
export class MyArticleComponent implements OnInit {
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
                  this.data
              .getAllUserArticle(params.username)
              .subscribe(
                (value: {
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
                  console.log(value);
                  this.articles = value.articles;
                }
              );
    });
  }

}
