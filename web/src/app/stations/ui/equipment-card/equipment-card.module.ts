import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentCardRoutingModule } from './equipment-card-routing.module';
import { EquipmentCardComponent } from './equipment-card.component';


@NgModule({
  declarations: [
    EquipmentCardComponent
  ],
  imports: [
    CommonModule,
    EquipmentCardRoutingModule
  ],
  exports: [
    EquipmentCardComponent
  ]
})
export class EquipmentCardModule { }
