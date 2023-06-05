import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransmissorCreateRoutingModule } from './transmissor-create-routing.module';
import { TransmissorCreateComponent } from './transmissor-create.component';
import { TransmissorService } from '../../data-access/transmissor.service';
import { ReceptorService } from '../../../receptor/data-access/receptor.service';
import { AntenaService } from '../../../antena/data-access/antena.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    TransmissorCreateComponent
  ],
  imports: [
    CommonModule,
    TransmissorCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    HttpClientModule,
    RouterModule,
    VmessageModule,
    InputDropdown2Module
  ],
  exports: [
    TransmissorCreateComponent
  ],
  providers: [
    TransmissorService,
    ReceptorService,
    AntenaService
  ]
})
export class TransmissorCreateModule { }
