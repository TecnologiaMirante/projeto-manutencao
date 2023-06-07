import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailCardComponent } from './station-detail-card.component';



@NgModule({
  declarations: [
    StationDetailCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StationDetailCardComponent
  ]
})
export class StationDetailCardModule { }
