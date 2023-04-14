import { NgModule } from '@angular/core';
import { EquipmentsComponent } from './equipments.component';
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