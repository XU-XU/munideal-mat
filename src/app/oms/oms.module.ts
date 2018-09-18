import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmsHomeComponent } from './oms-home/oms-home.component';
import { OmsListComponent } from './oms-list/oms-list.component';
import { OmsItemComponent } from './oms-item/oms-item.component';
import { OmsHeaderComponent } from './oms-header/oms-header.component';
import { OmsRoutingModule } from './oms-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule}  from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { NewOrderComponent } from './new-order/new-order.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    OmsRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatBadgeModule,
    ReactiveFormsModule
  ],
  declarations: [OmsHomeComponent, OmsListComponent, OmsItemComponent, OmsHeaderComponent, NewOrderComponent],
  entryComponents: [NewOrderComponent]
})
export class OmsModule { }
