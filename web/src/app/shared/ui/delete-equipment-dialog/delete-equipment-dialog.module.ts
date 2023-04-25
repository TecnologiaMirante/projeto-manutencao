import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteEquipmentDialogComponent } from './delete-equipment-dialog.component';
import { CancelButtonModule } from '../cancel-button/cancel-button.module';



@NgModule({
  declarations: [
    DeleteEquipmentDialogComponent
  ],
  imports: [
    CommonModule,
    CancelButtonModule
  ],
  exports: [
    DeleteEquipmentDialogComponent
  ]
})
export class DeleteEquipmentDialogModule { }
