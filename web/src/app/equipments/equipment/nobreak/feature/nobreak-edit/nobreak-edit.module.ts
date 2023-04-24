import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NobreakEditRoutingModule } from './nobreak-edit-routing.module';
import { NobreakEditComponent } from './nobreak-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { DeleteButtonModule } from 'src/app/shared/ui/delete-button/delete-button.module';


@NgModule({
  declarations: [
    NobreakEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NobreakEditRoutingModule,
    InputTextModule,
    CancelButtonModule,
    DeleteButtonModule
  ],
  exports: [
    NobreakEditComponent
  ]
})
export class NobreakEditModule { }
