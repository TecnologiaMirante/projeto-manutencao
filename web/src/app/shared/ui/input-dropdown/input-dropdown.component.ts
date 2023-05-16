import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css']
})
export class InputDropdownComponent {

  @Input() control!: FormControl;
  @Input() controlName!: FormControlName;
  @Input() title!: string;
  @Input() placeholder: string = "XXXXX";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  @Input() selectedEquipmentType!: EquipmentType;
  @Output() equipmentTypeSelected: EventEmitter<EquipmentType> = new EventEmitter<EquipmentType>();

  OnEquipmentTypeChange() {
    if(this.selectedEquipmentType) {
      this.equipmentTypeSelected.emit(this.selectedEquipmentType);
    }
  }

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
}
