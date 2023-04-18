import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NobreakCreateRoutingModule } from './nobreak-create-routing.module';
import { NobreakCreateComponent } from './nobreak-create.component';
import { NobreakCreateEditCardModule } from '../../ui/nobreak-create-edit-card/nobreak-create-edit-card.module';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';

@NgModule({
  declarations: [
    NobreakCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NobreakCreateRoutingModule,
    NobreakCreateEditCardModule,
    InputTextModule
  ],
  exports: [
    NobreakCreateComponent
  ]
})
export class NobreakCreateModule { }
