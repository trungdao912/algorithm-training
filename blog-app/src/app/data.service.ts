import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './models/article.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ALL_ARTICLES_URL = 'https://conduit.productionready.io/api/articles';
  USER_ARTICLES_URL = 'https://conduit.productionready.io/api/articles/feed';
  GET_USER_INFO_URL = 'https://conduit.productionready.io/api/users/login';
  REGISTRATION_URL = 'https://conduit.productionready.io/api/users';
  USER_URL = 'https://conduit.productionready.io/api/user';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Object> {
    return this.http.get(this.ALL_ARTICLES_URL);
  }

  getUserLogInInfo(email: string, password: string): Observable<Object> {
    return this.http.post(this.GET_USER_INFO_URL, {
      "user": {
        "email": email,
        "password": password
      }
    });
  }

  getUserArticles(): Observable<Object> {
    return this.http.get(this.USER_ARTICLES_URL, {
      params: {
        offset: '0'
      }
    })
  }

  registNewAcc(name: string, email: string, password: string) {
    return this.http.post(this.REGISTRATION_URL, {
      "user": {
        "username": name,
        "email": email,
        "password": password
      }
    })
  }

  getUser() {
    return this.http.get(this.USER_URL);
  }

  updateUser(imageUrl?: string, name?: string, bio?: string, email?: string, password?: string) {
    return this.http.put(this.USER_URL, {
      "user": {
        "image": imageUrl,
        "username": name,
        "bio": bio,
        "email": email,
        "password": password
      }
    })
  }

  createArticles(title: string, description: string, body: string, tagList?: Array<string>) {
    return this.http.post(this.ALL_ARTICLES_URL, {
      "article": {
        "title": title,
        "description": description,
        "body": body,
        "tagList": tagList
      }
    })
  }

  getArticle(slug: string) {
    return this.http.get(`${this.ALL_ARTICLES_URL}/${slug}`);
  }
}
