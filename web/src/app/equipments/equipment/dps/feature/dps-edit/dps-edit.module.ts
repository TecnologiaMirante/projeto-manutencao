import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DpsEditRoutingModule } from './dps-edit-routing.module';
import { DpsEditComponent } from './dps-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisjuntorEditRoutingModule } from '../../../disjuntor/feature/disjuntor-edit/disjuntor-edit-routing.module';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { DpsService } from '../../data-access/dps.service';


@NgModule({
  declarations: [
    DpsEditComponent
  ],
  imports: [
    CommonModule,
    DpsEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    DisjuntorEditRoutingModule,
    InputTextModule,
    CancelButtonModule,
    DeleteButtonModule,
    DeleteEquipmentDialogModule,
    HttpClientModule,
    VmessageModule
  ],
  exports: [
    DpsEditComponent
  ],
  providers: [
    DpsService
  ]
})
export class DpsEditModule { }
