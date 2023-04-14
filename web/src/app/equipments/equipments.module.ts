import { NgModule } from '@angular/core';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsTypeComponent } from './ui/equipments-type/equipments-type.component';

@NgModule({
    imports: [
        EquipmentsRoutingModule
    ],
    declarations: [
        EquipmentsComponent,
    ],
})
export class EquipmentsModule {}