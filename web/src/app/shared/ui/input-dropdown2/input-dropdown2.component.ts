import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';

@Component({
  selector: 'app-input-dropdown2',
  templateUrl: './input-dropdown2.component.html',
  styleUrls: ['./input-dropdown2.component.css']
})
export class InputDropdown2Component {

  @Input() control!: FormControl;
  @Input() controlName!: FormControlName;
  @Input() title!: string;
  @Input() placeholder: string = "XXXXX";

  @Input() optionsList!: string[];
  @Input() selectedOption!: string;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>;

  OnOptionChange() {
    if(this.selectedOption) {
      this.optionSelected.emit(this.selectedOption);
    }
  }
}
