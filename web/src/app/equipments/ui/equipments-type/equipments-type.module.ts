import { NgModule } from '@angular/core';
import { EquipmentsTypeComponent } from './equipments-type.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EquipmentsItemModule } from '../equipments-item/equipments-item.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        EquipmentsItemModule
    ],
    declarations: [
        EquipmentsTypeComponent
    ],
    exports: [
        EquipmentsTypeComponent
    ]
})

export class EquipmentsTypeModule {}