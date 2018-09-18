import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewOrderComponent } from '../new-order/new-order.component';

@Component({
  selector: 'app-oms-header',
  templateUrl: './oms-header.component.html',
  styleUrls: ['./oms-header.component.scss']
})
export class OmsHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(NewOrderComponent);
  }

}
