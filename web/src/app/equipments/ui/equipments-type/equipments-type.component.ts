import { Component } from '@angular/core';

@Component({
  selector: 'app-equipments-type',
  templateUrl: './equipments-type.component.html',
  styleUrls: ['./equipments-type.component.css']
})
export class EquipmentsTypeComponent {
  
  lista:listaEquipments[] = [
    {
      title: "Elétrica",
      items: ["Disjuntor", "DPS", "NoBreak"]
    },
    {
      title: "Refrigeração",
      items: ["Ar-condicionado", "Exaustor"]
    },
    {
      title: "Irradiação",
      items: ["Antena", "Cabo", "Combinador", "Parabolica", "Receptor", "Torre", "Transmissor"]
    },
    {
      title: "Telemetria",
      items: ["Telemetria", "Switch"]
    },
  ]
}

interface listaEquipments {
  title: string;
  items: string[];
}