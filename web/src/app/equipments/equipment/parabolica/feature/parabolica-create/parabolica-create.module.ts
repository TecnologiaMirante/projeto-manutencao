import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParabolicaCreateRoutingModule } from './parabolica-create-routing.module';
import { ParabolicaCreateComponent } from './parabolica-create.component';
import { ParabolicaService } from '../../data-access/parabolica.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    ParabolicaCreateComponent
  ],
  imports: [
    CommonModule,
    ParabolicaCreateRoutingModule,
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
    ParabolicaCreateComponent
  ],
  providers: [
    ParabolicaService
  ]
})
export class ParabolicaCreateModule { }
