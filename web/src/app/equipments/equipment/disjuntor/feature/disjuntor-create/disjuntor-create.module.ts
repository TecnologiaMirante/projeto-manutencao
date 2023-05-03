import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisjuntorCreateRoutingModule } from './disjuntor-create-routing.module';
import { DisjuntorCreateComponent } from './disjuntor-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';


@NgModule({
  declarations: [
    DisjuntorCreateComponent
  ],
  imports: [
    CommonModule,
    DisjuntorCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    RouterModule,
    VmessageModule

  ],
  exports: [
    DisjuntorCreateComponent
  ]
})
export class DisjuntorCreateModule { }
