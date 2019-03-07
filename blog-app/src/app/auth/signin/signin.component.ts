import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private form: FormBuilder, private auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.myForm = this.form.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.auth.emitSignInValue({
      "email": this.myForm.get('email').value,
      "password": this.myForm.get('password').value
    })

    this.auth.login();
    this.router.navigateByUrl('/');
  }
}
