import { NgModule } from '@angular/core';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentsCreateComponent } from './feature/equipments-create/equipments-create.component';
import { EquipmentsRoutingModule } from './equipments-routing.module';

@NgModule({
    imports: [
        EquipmentsRoutingModule
    ],
    declarations: [
        EquipmentsComponent,
    ],
})
export class EquipmentsModule {}