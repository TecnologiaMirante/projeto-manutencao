import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nobreak-edit',
  templateUrl: './nobreak-edit.component.html',
  styleUrls: ['./nobreak-edit.component.css']
})
export class NobreakEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "NBR0001";
  funcao:string = "Editar Nobreak";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.equipamento} > ${this.funcao}`

  editNobreakForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editNobreakForm = this.formBuilder.group({
      tag: ['',
        [
          Validators.pattern('^[a-zA-Z]*$')
        ]
      ],
      marca: [''],
      modelo: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      tensao_entrada: [''],
      tensao_saida: [''],
    }, {
      validators: this.atLeastOneHasValue(['tag', 'marca', 'modelo', 'tensao_entrada', 'tensao_saida'])
    })
  }

  OnSubmit() {
    // const tag = this.editNobreakForm.get('tag')?.value;
    // const marca = this.editNobreakForm.get('marca')?.value;
    // const modelo = this.editNobreakForm.get('modelo')?.value;
    // const tensao_entrada = this.editNobreakForm.get('tensao_entrada')?.value;
    // const tensao_saida = this.editNobreakForm.get('tensao_saida')?.value;
    
    // alert(tag)
    // alert(marca)
    // alert(modelo)
    // alert(tensao_entrada)
    // alert(tensao_saida)
    alert('blz')
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  delete() {
    alert("Chamou service de delete!")
  }  
 
  atLeastOneHasValue(fields: Array<string>) {
    return (group: FormGroup) => {
      for (const fieldName of fields) {
        if (group.get(fieldName)!.value) {
          return null;
        }
      }
      return { atLeastOneFieldFilled: true };
    }
  }

}
