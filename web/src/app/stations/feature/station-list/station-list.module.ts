import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationListRoutingModule } from './station-list-routing.module';
import { StationListComponent } from './station-list.component';
import { FilterByNamePipe } from '../../utils/pipes/filter-by-name.pipe';
import { StationsService } from '../../data-access/stations.service';
import { StationCardModule } from '../../ui/station-card/station-card.module';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';
import { HttpClientModule } from '@angular/common/http';
import { FabModule } from 'src/app/shared/ui/fab/fab.module';
import { Stations1Module } from '../../ui/stations1/stations1.module';


@NgModule({
  declarations: [
    StationListComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    StationListRoutingModule,
    StationCardModule,
    SearchBarModule,
    HttpClientModule,
    FabModule,
    Stations1Module,
  ],
  exports: [
    StationListComponent,
  ],
  providers: [
    StationsService
  ]
})
export class StationListModule { }
