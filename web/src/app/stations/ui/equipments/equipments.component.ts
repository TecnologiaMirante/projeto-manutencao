import { Component, Input } from '@angular/core';
import { listaEquipments } from '../../data-access/lista-equipments';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent {

  @Input() equipaments!: listaEquipments;

}
