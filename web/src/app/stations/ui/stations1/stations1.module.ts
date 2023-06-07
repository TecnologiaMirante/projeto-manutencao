import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stations1Component } from './stations1.component';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';
import { StationCardModule } from '../station-card/station-card.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Stations1Component
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    StationCardModule,
    RouterModule
  ],
  exports: [
    Stations1Component
  ]
})
export class Stations1Module { }
