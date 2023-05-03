import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisjuntorCreateRoutingModule } from './disjuntor-create-routing.module';
import { DisjuntorCreateComponent } from './disjuntor-create.component';


@NgModule({
  declarations: [
    DisjuntorCreateComponent
  ],
  imports: [
    CommonModule,
    DisjuntorCreateRoutingModule
  ],
  exports: [
    DisjuntorCreateComponent
  ]
})
export class DisjuntorCreateModule { }
