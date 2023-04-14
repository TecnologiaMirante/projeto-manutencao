import { NgModule } from '@angular/core';
import { EquipmentsCreateComponent } from './equipments-create.component';
import { EquipmentsCreateRoutingModule } from './equipments-create-routing.module';
import { EquipmentsTypeModule } from '../../ui/equipments-type/equipments-type.module';

@NgModule({
    declarations: [
        EquipmentsCreateComponent
    ],
    imports: [
        EquipmentsCreateRoutingModule,
        EquipmentsTypeModule
    ],
    exports: [
        EquipmentsCreateComponent
    ]
})
export class EquipmentsCreateModule {}