import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorreEditRoutingModule } from './torre-edit-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { TorreEditComponent } from './torre-edit.component';
import { TorreService } from '../../data-access/torre.service';


@NgModule({
  declarations: [
    TorreEditComponent
  ],
  imports: [
    CommonModule,
    TorreEditRoutingModule,
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
    TorreEditComponent
  ],
  providers: [
    TorreService
  ]
})
export class TorreEditModule { }
