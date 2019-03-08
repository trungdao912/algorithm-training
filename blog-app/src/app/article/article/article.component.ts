import { AuthService } from './../../auth/auth.service';
import { Comment } from './../../models/comment.model';
import { Article } from './../../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  myForm: FormGroup;
  article: Article;
  comments: Comment[];
  username: string;
  constructor(private form: FormBuilder, private data: DataService, private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.myForm = this.form.group({
      comment: ['', Validators.required]
    });

    this.route.params.subscribe((params) => {
      this.data.getArticle(params.slug).subscribe((value: {article: Article}) => {
        this.article = value.article;
        this.data.getComments(params.slug).subscribe((val: {comments: Comment[]}) => {
          console.log(val);
          this.comments = val.comments;
          this.username = this.auth.checkUser().user.username;
        });
      });
    });

    // this.route.params
    //   .pipe(flatMap(params => {
    //       return this.data.getArticle(params.slug)
    //   }))
  }

  onSubmit() {
    this.route.params.subscribe((params) => {
      this.data.postComment(this.myForm.get('comment').value, params.slug).subscribe((val) => {
        this.data.getComments(params.slug).subscribe((val2: {comments: Comment[]}) => {
          this.myForm.get('comment').reset();
          this.comments = val2.comments;
        });
      });
    });
  }

  onDelete(id: number) {
    this.route.params.subscribe((params) => {
      this.data.deleteComment(params.slug, id).subscribe((val) => {
        this.comments = this.comments.filter((comment) => {
          return comment.id !== id
        });
      })
    })
  }

}
