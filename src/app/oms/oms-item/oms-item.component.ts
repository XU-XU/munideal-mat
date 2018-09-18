import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oms-item',
  templateUrl: './oms-item.component.html',
  styleUrls: ['./oms-item.component.scss']
})
export class OmsItemComponent implements OnInit {
  statuses: string[] = [
    "premanufacturing",
    "manufacturing",
    "ask for payment"
  ]

  constructor() { }

  ngOnInit() {
  }

}
