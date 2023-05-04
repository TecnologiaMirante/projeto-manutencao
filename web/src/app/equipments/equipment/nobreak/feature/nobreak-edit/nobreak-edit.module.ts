import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NobreakEditRoutingModule } from './nobreak-edit-routing.module';
import { NobreakEditComponent } from './nobreak-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';
import { DeleteEquipmentDialogModule } from 'src/app/shared/ui/delete-equipment-dialog/delete-equipment-dialog.module';
import { ClickOutsideModule } from 'src/app/shared/utils/directives/click-outside.module';
import { ClickedOutsideModule } from 'src/app/shared/utils/directives/clicked-outside/clicked-outside.module';
import { NobreakService } from '../../data-access/nobreak.service';
import { HttpClientModule } from '@angular/common/http';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { CancelDialogModule } from 'src/app/shared/ui/cancel-dialog/cancel-dialog.module';

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
    ClickOutsideModule,
    ClickedOutsideModule,
    HttpClientModule,
    VmessageModule,
    CancelDialogModule
  ],
  exports: [
    NobreakEditComponent
  ],
  providers: [
    NobreakService
  ]
})
export class NobreakEditModule { }
