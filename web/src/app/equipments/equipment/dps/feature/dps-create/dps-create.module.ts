import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DpsCreateRoutingModule } from './dps-create-routing.module';
import { DpsCreateComponent } from './dps-create.component';


@NgModule({
  declarations: [
    DpsCreateComponent
  ],
  imports: [
    CommonModule,
    DpsCreateRoutingModule
  ],
  exports: [
    DpsCreateComponent
  ]
})
export class DpsCreateModule { }
