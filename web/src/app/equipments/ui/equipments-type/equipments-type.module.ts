import { NgModule } from '@angular/core';
import { EquipmentsTypeComponent } from './equipments-type.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        EquipmentsTypeComponent
    ],
    exports: [
        EquipmentsTypeComponent
    ]
})

export class EquipmentsTypeModule {}