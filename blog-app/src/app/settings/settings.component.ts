import { User } from './../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  myForm: FormGroup

  constructor(private form: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.myForm = this.form.group({
      imageUrl: ['', Validators.required],
      name: ['', Validators.required],
      bio: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })

    this.data.getUser().subscribe((user: User) => {
      this.myForm = this.form.group({
        imageUrl: [user.user.image, Validators.required],
        name: [user.user.username, Validators.required],
        bio: [user.user.bio, Validators.required],
        email: [user.user.email, Validators.email],
        password: ['', Validators.required]
      })
    })

  }

  onSubmit() {
    // tslint:disable-next-line:max-line-length
    this.data.updateUser(this.myForm.get('imageUrl').value, this.myForm.get('name').value, this.myForm.get('bio').value, this.myForm.get('email').value, this.myForm.get('password').value)
      .subscribe((returnVal) => {
        console.log(returnVal);
      })
  }

}
