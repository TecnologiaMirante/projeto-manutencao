import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDropdownComponent } from './input-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    InputDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    InputDropdownComponent
  ]
})
export class InputDropdownModule { }
