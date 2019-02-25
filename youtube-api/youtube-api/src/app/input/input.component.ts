import { Filter } from './../videodetail/videodetail.component';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  value: string;
  output: Filter;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentData.subscribe((data: Filter) => {
      this.output = data;
    })
  }

  onChange() {
    let { select, num } = this.output;

    this.data.changeData({
      value: this.value,
      select: select,
      num: num
    });
  }

  onSelect(sortField: string) {
    let { value, num } = this.output;

    this.data.changeData({
      value: value,
      select: sortField,
      num: num
    });
  }

  onPag(num: number) {
    let { value, select } = this.output;

    this.data.changeData({
      value: value,
      select: select,
      num: num
    })
  }

}
