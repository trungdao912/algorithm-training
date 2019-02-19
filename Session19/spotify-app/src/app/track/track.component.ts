import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Artists } from '../artist/artist.component';

interface Tracks {
  tracks: Array<{
    album: {
      album_type: string,
      artists: [],
      external_urls: {
        spotify: string
      },
      href: string,
      id: string,
      images: Array<{
        height?: number,
        url?: string,
        width?: number
      }>,
      name: string,
      release_date: string,
      release_date_precision: string,
      total_tracks: number,
      type: string,
      uri: string
    },
    artists: Array<{
      external_urls: {
        spotify: string
      },
      href: string,
      id: string,
      name: string,
      type: string,
      uri: string
    }>,
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: {
      isrc: string
    },
    external_urls: {
      spotify: string
    },
    href: string,
    id: string,
    is_local: boolean,
    is_playable: boolean,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string
  }>;
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  tracks;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.data.getTopTracks(id).subscribe((values: Tracks) => {
        console.log(values);
        this.tracks = values.tracks;
      });
    });
  }

}
