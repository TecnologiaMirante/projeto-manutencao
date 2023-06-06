import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationDetailRoutingModule } from './station-detail-routing.module';
import { StationDetailComponent } from './station-detail.component';


@NgModule({
  declarations: [
    StationDetailComponent
  ],
  imports: [
    CommonModule,
    StationDetailRoutingModule
  ],
  exports: [
    StationDetailComponent
  ]
})
export class StationDetailModule { }
