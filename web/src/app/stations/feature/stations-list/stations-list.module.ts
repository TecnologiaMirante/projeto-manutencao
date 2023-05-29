import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsListRoutingModule } from './stations-list-routing.module';
import { StationsListComponent } from './stations-list.component';
import { StationCardModule } from '../../ui/station-card/station-card.module';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';


@NgModule({
  declarations: [
    StationsListComponent
  ],
  imports: [
    CommonModule,
    StationsListRoutingModule,
    StationCardModule,
    SearchBarModule
  ],
  exports: [
    StationsListComponent
  ]
})
export class StationsListModule { }
