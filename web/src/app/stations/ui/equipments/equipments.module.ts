import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentCardModule } from '../equipment-card/equipment-card.module';


@NgModule({
  declarations: [
    EquipmentsComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    EquipmentCardModule
  ],
  exports: [
    EquipmentsComponent
  ]
})
export class EquipmentsModule { }
