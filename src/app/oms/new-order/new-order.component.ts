import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  orderForm:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      orderNo: [ null, [ Validators.required ] ],
      client: [ null, [ Validators.required ] ],
      destination: [null, [ Validators.required ] ],
      etd: [null, [ Validators.required ] ],
      amount: [null, [ Validators.required ] ],
      status:[null, [ Validators.required ]],
      payment: [null, [ Validators.required ] ]
    });
  }

}
