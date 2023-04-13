import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {}