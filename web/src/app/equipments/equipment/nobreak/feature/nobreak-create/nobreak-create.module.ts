import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NobreakCreateRoutingModule } from './nobreak-create-routing.module';
import { NobreakCreateComponent } from './nobreak-create.component';
import { NobreakCreateEditCardModule } from '../../ui/nobreak-create-edit-card/nobreak-create-edit-card.module';
import { TextButtonModule } from 'src/app/shared/ui/text-button/text-button.module';

@NgModule({
  declarations: [
    NobreakCreateComponent
  ],
  imports: [
    CommonModule,
    NobreakCreateRoutingModule,
    NobreakCreateEditCardModule,
    TextButtonModule
  ],
  exports: [
    NobreakCreateComponent
  ]
})
export class NobreakCreateModule { }
