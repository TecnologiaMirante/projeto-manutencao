import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptorEditRoutingModule } from './receptor-edit-routing.module';
import { ReceptorEditComponent } from './receptor-edit.component';
import { ReceptorService } from '../../data-access/receptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';
import { ParabolicaService } from '../../../parabolica/data-access/parabolica.service';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';


@NgModule({
  declarations: [
    ReceptorEditComponent
  ],
  imports: [
    CommonModule,
    ReceptorEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    InputTextModule,
    CancelButtonModule,
    DeleteButtonModule,
    DeleteEquipmentDialogModule,
    HttpClientModule,
    VmessageModule,
    CancelDialogModule,
    InputDropdown2Module
  ],
  exports: [
    ReceptorEditComponent
  ],
  providers: [
    ReceptorService,
    ParabolicaService
  ]
})
export class ReceptorEditModule { }
