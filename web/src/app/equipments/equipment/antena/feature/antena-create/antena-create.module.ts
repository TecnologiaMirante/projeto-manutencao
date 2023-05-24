import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntenaCreateRoutingModule } from './antena-create-routing.module';
import { AntenaCreateComponent } from './antena-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';
import { AntenaService } from '../../data-access/antena.service';


@NgModule({
  declarations: [
    AntenaCreateComponent
  ],
  imports: [
    CommonModule,
    AntenaCreateRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    HttpClientModule,
    RouterModule,
    VmessageModule,
    InputDropdown2Module
  ],
  exports: [
    AntenaCreateComponent
  ],
  providers: [
    AntenaService
  ]
})
export class AntenaCreateModule { }
