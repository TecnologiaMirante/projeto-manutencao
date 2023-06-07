import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailCardComponent } from './station-detail-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StationDetailCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StationDetailCardComponent
  ]
})
export class StationDetailCardModule { }
