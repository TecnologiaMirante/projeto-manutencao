import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelemetriaCreateRoutingModule } from './telemetria-create-routing.module';
import { TelemetriaCreateComponent } from './telemetria-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TelemetriaCreateComponent
  ],
  imports: [
    CommonModule,
    TelemetriaCreateRoutingModule,
    FormsModule
  ],
  exports: [
    TelemetriaCreateComponent
  ]
})
export class TelemetriaCreateModule { }
