import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NobreakCreateRoutingModule } from './nobreak-create-routing.module';
import { NobreakCreateComponent } from './nobreak-create.component';

@NgModule({
  declarations: [
    NobreakCreateComponent
  ],
  imports: [
    CommonModule,
    NobreakCreateRoutingModule
  ],
  exports: [
    NobreakCreateComponent
  ]
})
export class NobreakCreateModule { }
