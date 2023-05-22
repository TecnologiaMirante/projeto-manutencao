import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchCreateRoutingModule } from './switch-create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NobreakCreateRoutingModule } from '../../../nobreak/feature/nobreak-create/nobreak-create-routing.module';
import { NobreakCreateEditCardModule } from '../../../nobreak/ui/nobreak-create-edit-card/nobreak-create-edit-card.module';
import { InputTextModule } from 'src/app/shared/ui/input-text/input-text.module';
import { CancelButtonModule } from 'src/app/shared/ui/cancel-button/cancel-button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/ui/vmessage/vmessage.module';
import { SwitchCreateComponent } from './switch-create.component';
import { SwitchService } from '../../data-access/switch.service';
import { InputDropdown2Module } from 'src/app/shared/ui/input-dropdown2/input-dropdown2.module';


@NgModule({
  declarations: [
    SwitchCreateComponent
  ],
  imports: [
    CommonModule,
    SwitchCreateRoutingModule,
    ReactiveFormsModule,
    NobreakCreateRoutingModule,
    NobreakCreateEditCardModule,
    InputTextModule,
    CancelButtonModule,
    HttpClientModule,
    RouterModule,
    VmessageModule,
    InputDropdown2Module
  ],
  exports: [
    SwitchCreateComponent
  ],
  providers: [
    SwitchService
  ]
})
export class SwitchCreateModule { }
