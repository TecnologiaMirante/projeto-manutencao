import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinadorCreateRoutingModule } from './combinador-create-routing.module';
import { CombinadorCreateComponent } from './combinador-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { InputDropdownModule } from 'src/app/shared/ui/input-dropdown/input-dropdown.module';
import { CombinadorService } from '../../data-access/combinador.service';


@NgModule({
  declarations: [
    CombinadorCreateComponent
  ],
  imports: [
    CommonModule,
    CombinadorCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    InputTextModule,
    CancelButtonModule,
    VmessageModule,
    InputDropdownModule
  ],
  exports: [
    CombinadorCreateComponent
  ],
  providers: [
    CombinadorService
  ]
})
export class CombinadorCreateModule { }
