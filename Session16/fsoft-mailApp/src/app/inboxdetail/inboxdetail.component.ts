import { DataService, Message } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inboxdetail',
  templateUrl: './inboxdetail.component.html',
  styleUrls: ['./inboxdetail.component.css']
})
export class InboxdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  data: Message;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.data = this.dataService.getDataById(params['id'])[0];
    });
  }

}
