import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDropdown2Component } from './input-dropdown2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputDropdown2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputDropdown2Component
  ]
})
export class InputDropdown2Module { }
