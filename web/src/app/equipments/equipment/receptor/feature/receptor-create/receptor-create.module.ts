import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptorCreateRoutingModule } from './receptor-create-routing.module';
import { ReceptorCreateComponent } from './receptor-create.component';
import { ReceptorService } from '../../data-access/receptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';
import { ParabolicaService } from '../../../parabolica/data-access/parabolica.service';


@NgModule({
  declarations: [
    ReceptorCreateComponent
  ],
  imports: [
    CommonModule,
    ReceptorCreateRoutingModule,
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
    ReceptorCreateComponent
  ],
  providers: [
    ReceptorService,
    ParabolicaService
  ]
})
export class ReceptorCreateModule { }
