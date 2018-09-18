import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OmsHomeComponent } from './oms-home/oms-home.component';

const routes: Routes = [
    { path: 'oms', component:OmsHomeComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OmsRoutingModule {}
