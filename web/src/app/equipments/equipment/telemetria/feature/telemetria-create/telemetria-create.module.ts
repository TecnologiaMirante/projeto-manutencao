import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelemetriaCreateRoutingModule } from './telemetria-create-routing.module';
import { TelemetriaCreateComponent } from './telemetria-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TelemetriaService } from '../../data-access/telemetria.service';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    TelemetriaCreateComponent
  ],
  imports: [
    CommonModule,
    TelemetriaCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    InputTextModule,
    CancelButtonModule,
    VmessageModule,
    InputDropdown2Module
  ],
  exports: [
    TelemetriaCreateComponent
  ],
  providers: [
    TelemetriaService
  ]
})
export class TelemetriaCreateModule { }
