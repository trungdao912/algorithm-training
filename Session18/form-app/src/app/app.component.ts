import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('form') form: FormGroup;

  title = 'form-app';
  defaultQuestion = 'Select an option';

  constructor() {}

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.form);
  }

}
