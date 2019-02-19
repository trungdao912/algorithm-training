import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {

  }

  getArtist(artist: string) {
    const value = artist.split(' ').join('%20');
    if (value) {
      return this.http.get(`https://api.spotify.com/v1/search?q=${value}&type=artist`);
    }
    return this.http.get(`https://api.spotify.com/v1/search?q=Bich%20phuong&type=artist`);
  }

  getTopTracks(id: string) {
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
