import { ActivatedRoute, Router } from '@angular/router';
import { Article } from './../../models/article.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  myForm: FormGroup

  constructor(private form: FormBuilder, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.form.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body: ['', Validators.required],
      tagList: [[''], Validators.required]
    })
  }

  onSubmit() {
    this.data.createArticles(this.myForm.get('title').value, this.myForm.get('description').value, this.myForm.get('body').value, this.myForm.get('tagList').value).subscribe((returnVal: { article: Article }) => {
      this.router.navigateByUrl(`/editor/${returnVal.article.slug}`)
    })
    //console.log(this.myForm.get('tagList').value.split(' '))
  }
}
