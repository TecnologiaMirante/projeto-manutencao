import { NgModule } from '@angular/core';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { TorreCreateComponent } from './equipment/torre/feature/torre-create/torre-create.component';

@NgModule({
    imports: [
        EquipmentsRoutingModule
    ],
    declarations: [
        EquipmentsComponent,
        TorreCreateComponent,
    ],
})
export class EquipmentsModule {}