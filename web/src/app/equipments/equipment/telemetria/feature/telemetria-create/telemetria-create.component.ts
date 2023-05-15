import { Component } from '@angular/core';
import { Telemetria } from '../../data-access/telemetria';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';

@Component({
  selector: 'app-telemetria-create',
  templateUrl: './telemetria-create.component.html',
  styleUrls: ['./telemetria-create.component.css']
})
export class TelemetriaCreateComponent {

  telemetria: Telemetria = {
    tag: '',
    marca: '',
    modelo: '',
    category: '',
  }

  equipmentsType: EquipmentType[];
  selectedEquipment: string;

  constructor() {
    this.equipmentsType = EquipmentsTypeList;
    this.selectedEquipment = this.equipmentsType[0].title;
  }

  selectedOption: string = 'oi';
  optionsList: string[] = ['Option 1', 'Option 2', 'Option 3'];

  ngOnInit() {
    this.selectedOption = this.optionsList[0];
    this.selectedEquipment = this.equipmentsType[0].title;
  }


}
