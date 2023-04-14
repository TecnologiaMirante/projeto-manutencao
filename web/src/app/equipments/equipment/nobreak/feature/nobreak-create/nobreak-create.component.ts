import { Component } from '@angular/core';

@Component({
  selector: 'app-nobreak-create',
  templateUrl: './nobreak-create.component.html',
  styleUrls: ['./nobreak-create.component.css']
})
export class NobreakCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "REC0001";
  funcao:string = "Criar Nobreak";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao}`

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
