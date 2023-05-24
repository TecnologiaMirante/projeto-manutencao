import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorreCreateRoutingModule } from './torre-create-routing.module';
import { TorreCreateComponent } from './torre-create.component';
import { TorreService } from '../../data-access/torre.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    TorreCreateComponent
  ],
  imports: [
    CommonModule,
    TorreCreateRoutingModule,
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
    TorreCreateComponent
  ],
  providers: [
    TorreService
  ]
})
export class TorreCreateModule { }
