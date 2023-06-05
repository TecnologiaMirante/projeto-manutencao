import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransmissorEditRoutingModule } from './transmissor-edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';
import { TransmissorEditComponent } from './transmissor-edit.component';
import { TransmissorService } from '../../data-access/transmissor.service';
import { ReceptorService } from '../../../receptor/data-access/receptor.service';
import { AntenaService } from '../../../antena/data-access/antena.service';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';


@NgModule({
  declarations: [
    TransmissorEditComponent
  ],
  imports: [
    CommonModule,
    TransmissorEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    CancelDialogModule,
    DeleteButtonModule,
    DeleteEquipmentDialogModule,
    HttpClientModule,
    RouterModule,
    VmessageModule,
    InputDropdown2Module
  ],
  exports: [
    TransmissorEditComponent
  ],
  providers: [
    TransmissorService,
    ReceptorService,
    AntenaService
  ]
})
export class TransmissorEditModule { }
