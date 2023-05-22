import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaboCreateRoutingModule } from './cabo-create-routing.module';
import { CaboCreateComponent } from './cabo-create.component';


@NgModule({
  declarations: [
    CaboCreateComponent
  ],
  imports: [
    CommonModule,
    CaboCreateRoutingModule
  ],
  exports: [
    CaboCreateComponent
  ]
})
export class CaboCreateModule { }
