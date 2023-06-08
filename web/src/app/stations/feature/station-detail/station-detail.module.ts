import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationDetailRoutingModule } from './station-detail-routing.module';
import { StationDetailComponent } from './station-detail.component';
import { StationsService } from '../../data-access/stations.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';
import { StationDetailCardModule } from '../../ui/station-detail-card/station-detail-card.module';
import { EquipmentsModule } from '../../ui/equipments/equipments.module';


@NgModule({
  declarations: [
    StationDetailComponent,
  ],
  imports: [
    CommonModule,
    StationDetailRoutingModule,
    HttpClientModule,
    SearchBarModule,
    StationDetailCardModule,
    EquipmentsModule
  ],
  exports: [
    StationDetailComponent
  ],
  providers: [
    StationsService
  ]
})
export class StationDetailModule { }
