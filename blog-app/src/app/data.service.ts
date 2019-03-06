import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ALL_ARTICLES_URL = 'https://conduit.productionready.io/api/articles';
  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get(this.ALL_ARTICLES_URL);
  }

}
