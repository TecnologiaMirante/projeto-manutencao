import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArCondicionadoCreateRoutingModule } from './ar-condicionado-create-routing.module';
import { ArCondicionadoCreateComponent } from './ar-condicionado-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { ArCondicionadoService } from '../../data-access/ar-condicionado.service';
import { InputDropdownModule } from 'src/app/shared/ui/input-dropdown/input-dropdown.module';


@NgModule({
  declarations: [
    ArCondicionadoCreateComponent
  ],
  imports: [
    CommonModule,
    ArCondicionadoCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CancelButtonModule,
    HttpClientModule,
    RouterModule,
    VmessageModule,
    InputDropdownModule
  ],
  exports: [
    ArCondicionadoCreateComponent
  ],
  providers: [
    ArCondicionadoService
  ]
})
export class ArCondicionadoCreateModule { }
