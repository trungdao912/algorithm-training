import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  condition: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuthenticate.subscribe((boo) => {
      this.condition = boo;
    })
  }

}
