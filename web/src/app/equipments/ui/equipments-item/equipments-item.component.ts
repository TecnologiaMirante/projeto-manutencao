import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipments-item',
  templateUrl: './equipments-item.component.html',
  styleUrls: ['./equipments-item.component.css']
})
export class EquipmentsItemComponent {
  
  @Input() name!: string;

}
