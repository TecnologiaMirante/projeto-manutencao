import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelDialogComponent } from './cancel-dialog.component';
import { CancelButtonModule } from '../cancel-button/cancel-button.module';



@NgModule({
  declarations: [
    CancelDialogComponent
  ],
  imports: [
    CommonModule,
    CancelButtonModule
  ],
  exports: [
    CancelDialogComponent
  ]
})
export class CancelDialogModule { }
