import { NgModule } from '@angular/core';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { NobreakEditComponent } from './equipment/nobreak/feature/nobreak-edit/nobreak-edit.component';

@NgModule({
    imports: [
        EquipmentsRoutingModule
    ],
    declarations: [
        EquipmentsComponent,
    ],
})
export class EquipmentsModule {}