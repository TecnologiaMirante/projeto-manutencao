import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaboCreateRoutingModule } from './cabo-create-routing.module';
import { CaboCreateComponent } from './cabo-create.component';
import { CaboService } from '../../data-access/cabo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    CaboCreateComponent
  ],
  imports: [
    CommonModule,
    CaboCreateRoutingModule,
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
    CaboCreateComponent
  ],
  providers: [
    CaboService
  ]
})
export class CaboCreateModule { }
