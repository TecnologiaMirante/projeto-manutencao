import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationCardComponent } from './station-card.component';



@NgModule({
  declarations: [
    StationCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StationCardComponent
  ]
})
export class StationCardModule { }
