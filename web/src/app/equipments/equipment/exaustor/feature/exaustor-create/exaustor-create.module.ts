import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaustorCreateRoutingModule } from './exaustor-create-routing.module';
import { ExaustorCreateComponent } from './exaustor-create.component';
import { ExaustorService } from '../../data-access/exaustor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    ExaustorCreateComponent
  ],
  imports: [
    CommonModule,
    ExaustorCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    VmessageModule,
    HttpClientModule,
    RouterModule,
    InputDropdown2Module
  ],
  exports: [
    ExaustorCreateComponent
  ],
  providers: [
    ExaustorService
  ]
})
export class ExaustorCreateModule { }
