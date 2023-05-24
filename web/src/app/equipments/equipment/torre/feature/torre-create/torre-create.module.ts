import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorreCreateRoutingModule } from './torre-create-routing.module';
import { TorreCreateComponent } from './torre-create.component';


@NgModule({
  declarations: [
    TorreCreateComponent
  ],
  imports: [
    CommonModule,
    TorreCreateRoutingModule
  ],
  exports: [
    TorreCreateComponent
  ]
})
export class TorreCreateModule { }
