import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { debounceTime } from 'rxjs/operators';

export interface Artists {
  artists: {
    href?: string,
    items?: Array<{
      external_urls?: {
        spotify?: string
      },
      followers?: {
        href?: boolean,
        total?: number
      },
      genres?: Array<string>,
      href?: string,
      id?: string,
      images?: Array<{
        height?: number,
        url?: string,
        width?: number
      }>,
      name?: string,
      popularity?: number,
      type?: string,
      uri?: string
    }>,
    limit?: number,
    next?: string,
    offset?: number,
    previous?: boolean,
    total?: number
  };
}
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  values;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.pipe(debounceTime(2000)).subscribe((message) => {
      this.data.getArtist(message).subscribe((data: Artists) => {
        this.values = data.artists.items;
      });
    });
  }



}
