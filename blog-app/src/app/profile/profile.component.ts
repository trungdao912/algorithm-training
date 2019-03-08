import { Profile } from './../models/profile.model';
import { DataService } from "src/app/data.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  info: { bio: string; following: boolean; image: string; username: string };
  condition = false;
  followed: boolean;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:max-line-length
      this.data
        .getProfile(params.username)
        .subscribe(
          (profile: {
            profile: {
              bio: string;
              following: boolean;
              image: string;
              username: string;
            };
          }) => {
            this.info = profile.profile;
            this.followed = profile.profile.following;
            console.log(this.followed);
          }
        );
    });
  }

  onChange() {
    this.condition = !this.condition;
  }

  followUser() {
    this.route.params.subscribe((params) => {
      this.data.followUser(params.username).subscribe((val: { profile: Profile }) => {
        this.followed = val.profile.following;
      })
    })
  }

  unfollowUser() {
    this.route.params.subscribe((params) => {
      this.data.unfollowUser(params.username).subscribe((val: { profile: Profile }) => {
        this.followed = val.profile.following;
      })
    })
  }
}
