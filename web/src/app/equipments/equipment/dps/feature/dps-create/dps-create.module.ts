import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DpsCreateRoutingModule } from './dps-create-routing.module';
import { DpsCreateComponent } from './dps-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';


@NgModule({
  declarations: [
    DpsCreateComponent
  ],
  imports: [
    CommonModule,
    DpsCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    HttpClientModule,
    RouterModule,
    VmessageModule
  ],
  exports: [
    DpsCreateComponent
  ]
})
export class DpsCreateModule { }
