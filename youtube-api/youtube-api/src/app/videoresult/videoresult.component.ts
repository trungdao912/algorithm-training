import { DataService } from './../data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface VideoDetail {
  items: Array<{
    snippet: {
      channelTitle: string,
      tags: Array<string>,
      title: string,
      description: string
    },
    statistics: {
      viewCount: string,
      likeCount: string,
      dislikeCount: string,
      favoriteCount: string,
      commentCount: string
    }
    id: string
  }>
}

@Component({
  selector: 'app-videoresult',
  templateUrl: './videoresult.component.html',
  styleUrls: ['./videoresult.component.css']
})
export class VideoresultComponent implements OnInit {

  myUrl: string;

  // tslint:disable-next-line:max-line-length
  constructor(private dataS: DataService, private route: ActivatedRoute, public sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) public data: VideoDetail) { }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   const id = params['id'];
    //   this.data.getVideoDetail(id).subscribe((data: VideoDetail) => {
    //     this.details = data;
    //   });
    // })
  }

  plus(string) {
    this.myUrl = 'https://www.youtube.com/embed/' + string;
    return this.myUrl;
  }

}
