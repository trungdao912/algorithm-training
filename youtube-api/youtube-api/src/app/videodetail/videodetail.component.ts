import { DataService } from "./../data.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import { debounceTime } from "rxjs/operators";
import { Subscription } from "rxjs";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import {
  VideoresultComponent,
  VideoDetail
} from "../videoresult/videoresult.component";
import { ActivatedRoute } from "@angular/router";

export interface ListVideo {
  items: Array<{
    snippet: {
      title: string;
      description: string;
      channelTitle: string;
      thumbnails: {
        default: {
          url: string;
        };
      };
      publishedAt: string;
    };
    id: {
      videoId: string;
    };
  }>;
}

export interface Filter {
  value: string;
  select: string;
  num: number;
}

@Component({
  selector: "app-videodetail",
  templateUrl: "./videodetail.component.html",
  styleUrls: ["./videodetail.component.css"],
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class VideodetailComponent implements OnInit, OnDestroy {
  option: string;
  subscription: Subscription;
  columnsToDisplay = ["title", "description"];
  expandedElement: ListVideo | null;
  dataSource;
  num;

  constructor(
    private data: DataService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.data.currentData
      .pipe(debounceTime(1000))
      .subscribe((message: Filter) => {
        this.num = message.num;
        this.data.getVideoList(message).subscribe((data2: ListVideo) => {
          this.dataSource = data2.items;
        });
      });
  }

  openDialog(id: string) {
    this.data.getVideoDetail(id).subscribe((data: VideoDetail) => {
      // console.log(data);
      const dialogRef = this.dialog.open(VideoresultComponent, { data });
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
