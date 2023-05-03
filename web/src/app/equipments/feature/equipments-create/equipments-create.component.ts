import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipments-create',
  templateUrl: './equipments-create.component.html',
  styleUrls: ['./equipments-create.component.css']
})
export class EquipmentsCreateComponent  implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "REC0001";
  funcao:string = "Criar equipamento";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao}`

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
