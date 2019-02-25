import { ListVideo, Filter } from './videodetail/videodetail.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  videolistURL: string = 'https://www.googleapis.com/youtube/v3/search';
  max: string = '50';
  key: string = 'AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw';

  videodetailUrl: string = 'https://www.googleapis.com/youtube/v3/videos';

  private dataSource = new BehaviorSubject({});
  currentData = this.dataSource.asObservable();

  newData: Array<string>;

  constructor(private http: HttpClient) { }

  changeData(value: Filter) {
    this.dataSource.next(value);
  }

  getVideoList(data: Filter) {
    return this.http.get(this.videolistURL, {
      params: {
        part: 'snippet',
        maxResults: this.max,
        q: data.value || 'Jennie',
        type: 'video',
        key: this.key,
        order: data.select || 'relevance'
      }
    })
  }

  getVideoDetail(value: string) {
    return this.http.get(this.videodetailUrl, {
      params: {
        part: 'snippet, statistics',
        id: value,
        key: this.key
      }
    })
  }
}
