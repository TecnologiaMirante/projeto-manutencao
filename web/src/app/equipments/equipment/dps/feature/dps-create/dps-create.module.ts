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
import { DpsService } from '../../data-access/dps.service';
import { InputDropdownModule } from 'src/app/shared/ui/input-dropdown/input-dropdown.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


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
    VmessageModule,
    InputDropdownModule,
    InputDropdown2Module
  ],
  exports: [
    DpsCreateComponent
  ],
  providers: [
    DpsService
  ]
})
export class DpsCreateModule { }
