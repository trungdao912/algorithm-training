import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  test = 'fish';
  options: string[] = [
    'Front-End Projects', 'Back-end Projects', 'Data Visualization', 'Challenges', 'Open Source Community', 'Gitter help rooms', 'Videos'
  ];
  selectedOptions: string[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      age: this.formBuilder.control(null),
      status: this.formBuilder.control(null),
      freeCodeCamp: this.freeCodeCamp() as FormArray
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  freeCodeCamp(): FormArray {
    const arr = [];

    this.options.forEach((option) => {
      arr.push(this.formBuilder.control(false));
    });

    return this.formBuilder.array(arr);
  }

  checkboxChange() {
    this.selectedOptions = [];
    this.freeCodeCampArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedOptions.push(this.options[i]);
      }
    });
    console.log(this.selectedOptions);
  }

  get freeCodeCampArray() {
    return this.form.get('freeCodeCamp') as FormArray;
  }
}
