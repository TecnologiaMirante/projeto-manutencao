import { Component, Input } from '@angular/core';
import { listaEquipments } from '../../data-access/lista-equipments';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.css']
})
export class EquipmentCardComponent {
  
  @Input() equipments!: DadosGerais;

}