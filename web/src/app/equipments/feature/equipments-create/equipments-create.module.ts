import { NgModule } from '@angular/core';
import { EquipmentsCreateComponent } from './equipments-create.component';
import { EquipmentsCreateRoutingModule } from './equipments-create-routing.module';

NgModule({
    declarations: [
        EquipmentsCreateComponent
    ],
    imports: [
        EquipmentsCreateRoutingModule
    ],
    exports: [
        EquipmentsCreateComponent
    ]
})
export class EquipmentsCreateModule {}