import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
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

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  @Input() selectedEquipmentStatus!: EquipmentStatus;
  @Output() equipmentStatusSelected: EventEmitter<EquipmentStatus> = new EventEmitter<EquipmentStatus>();

  OnEquipmentStatusChange() {
    if(this.selectedEquipmentStatus) {
      this.equipmentStatusSelected.emit(this.selectedEquipmentStatus);
    }
  }
}
