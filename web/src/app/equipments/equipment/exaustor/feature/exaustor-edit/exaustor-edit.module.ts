import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaustorEditRoutingModule } from './exaustor-edit-routing.module';
import { ExaustorEditComponent } from './exaustor-edit.component';
import { ExaustorService } from '../../data-access/exaustor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { InputDropdownModule } from 'src/app/shared/ui/input-dropdown/input-dropdown.module';


@NgModule({
  declarations: [
    ExaustorEditComponent
  ],
  imports: [
    CommonModule,
    ExaustorEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    DeleteButtonModule,
    DeleteEquipmentDialogModule,
    VmessageModule,
    CancelDialogModule,
    HttpClientModule,
    InputDropdownModule
  ],
  exports: [
    ExaustorEditComponent
  ],
  providers: [
    ExaustorService
  ]
})
export class ExaustorEditModule { }
