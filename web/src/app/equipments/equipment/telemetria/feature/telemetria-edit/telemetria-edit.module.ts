import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelemetriaEditRoutingModule } from './telemetria-edit-routing.module';
import { TelemetriaEditComponent } from './telemetria-edit.component';
import { TelemetriaService } from '../../data-access/telemetria.service';


@NgModule({
  declarations: [
    TelemetriaEditComponent
  ],
  imports: [
    CommonModule,
    TelemetriaEditRoutingModule
  ],
  exports: [
    TelemetriaEditComponent
  ],
  providers: [
    TelemetriaService
  ]
})
export class TelemetriaEditModule { }
