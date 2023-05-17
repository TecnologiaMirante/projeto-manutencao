import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDropdownComponent } from './input-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputDropdownComponent
  ]
})
export class InputDropdownModule { }
