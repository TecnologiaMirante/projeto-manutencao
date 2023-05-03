import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisjuntorEditRoutingModule } from './disjuntor-edit-routing.module';
import { DisjuntorEditComponent } from './disjuntor-edit.component';
import { DisjuntorService } from '../../data-access/disjuntor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';


@NgModule({
  declarations: [
    DisjuntorEditComponent
  ],
  imports: [
    CommonModule,
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
    DisjuntorEditComponent
  ],
  providers: [
    DisjuntorService
  ]
})
export class DisjuntorEditModule { }
