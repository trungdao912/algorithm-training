import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserInfo = new BehaviorSubject<Object>({});
  public currentUser = this.currentUserInfo.asObservable();

  public user: BehaviorSubject<User>;
  public userEmit: Observable<User>;

  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticate = this.isAuthenticated.asObservable();

  constructor(private data: DataService) { 
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.userEmit = this.user.asObservable();
  }

  emitSignInValue(loginInfo: {}) {
    this.currentUserInfo.next(loginInfo);
  }

  login() {
    this.currentUser.subscribe((user: {"email": string, "password": string}) => {
      this.data.getUserLogInInfo(user.email, user.password).subscribe((userInfo: User) => {
        if (userInfo && userInfo.user.token) {
          localStorage.setItem('currentUser', JSON.stringify(userInfo));
          this.user.next(userInfo);
          this.isAuthenticated.next(true);
        }
      })
    })
  }

  getToken(): string {
    if (!JSON.parse(localStorage.getItem('currentUser'))) {
      return;
    }
    return JSON.parse(localStorage.getItem('currentUser')).user.token;
  }

  isAuthentiCated() {
    if (this.getToken()) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  checkUser() {
    return this.user.value;
  }
}
