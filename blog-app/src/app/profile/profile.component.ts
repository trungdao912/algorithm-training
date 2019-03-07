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
          }
        );
    });
  }

  onChange() {
    this.condition = !this.condition;
  }
}
