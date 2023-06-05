import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsListRoutingModule } from './stations-list-routing.module';
import { StationsListComponent } from './stations-list.component';
import { StationCardModule } from '../../ui/station-card/station-card.module';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';
import { StationsService } from '../../data-access/stations.service';
import { HttpClientModule } from '@angular/common/http';
import { FabModule } from 'src/app/shared/ui/fab/fab.module';

@NgModule({
  declarations: [
    StationsListComponent
  ],
  imports: [
    CommonModule,
    StationsListRoutingModule,
    StationCardModule,
    SearchBarModule,
    HttpClientModule,
    FabModule,
  ],
  exports: [
    StationsListComponent
  ],
  providers: [
    StationsService
  ]
})
export class StationsListModule { }