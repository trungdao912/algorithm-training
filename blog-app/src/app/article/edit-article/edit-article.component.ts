import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  myForm: FormGroup

  constructor(private form: FormBuilder, private data: DataService, private route: ActivatedRoute) { 
    this.myForm = this.form.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body: ['', Validators.required],
      tagList: [[''], Validators.required]
    })
  }

  ngOnInit() {
    this.route.params.subscribe((returnParams) => {
      this.data.getArticle(returnParams.slug).subscribe((value) => {
        console.log(value);
      })
    })
  }

  onSubmit() {

  
    //console.log(this.myForm.get('tagList').value.split(' '))
  }
}
