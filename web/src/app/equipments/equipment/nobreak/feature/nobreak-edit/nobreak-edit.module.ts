import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NobreakEditRoutingModule } from './nobreak-edit-routing.module';
import { NobreakEditComponent } from './nobreak-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { NobreakService } from '../../data-access/nobreak.service';
import { HttpClientModule } from '@angular/common/http';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';
import { InputDropdownModule } from 'src/app/shared/ui/input-dropdown/input-dropdown.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';

@NgModule({
  declarations: [
    NobreakEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NobreakEditRoutingModule,
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
    NobreakEditComponent
  ],
  providers: [
    NobreakService
  ]
})
export class NobreakEditModule { }
