import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private form: FormBuilder, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.form.group({
      userName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.data.registNewAcc(this.myForm.get('userName').value, this.myForm.get('email').value, this.myForm.get('password').value)
      .subscribe((feedback) => {
        this.router.navigateByUrl('/');
      })
  }

}
