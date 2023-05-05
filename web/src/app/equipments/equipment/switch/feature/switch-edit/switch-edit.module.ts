import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchEditRoutingModule } from './switch-edit-routing.module';
import { SwitchEditComponent } from './switch-edit.component';
import { SwitchService } from '../../data-access/switch.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisjuntorEditRoutingModule } from '../../../disjuntor/feature/disjuntor-edit/disjuntor-edit-routing.module';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';


@NgModule({
  declarations: [
    SwitchEditComponent
  ],
  imports: [
    CommonModule,
    SwitchEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    DisjuntorEditRoutingModule,
    InputTextModule,
    CancelButtonModule,
    DeleteButtonModule,
    DeleteEquipmentDialogModule,
    HttpClientModule,
    VmessageModule,
    CancelDialogModule
  ],
  exports: [
    SwitchEditComponent
  ],
  providers: [
    SwitchService
  ]

})
export class SwitchEditModule { }
