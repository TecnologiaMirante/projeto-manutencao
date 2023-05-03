import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nobreak } from '../../data-access/nobreak';
import { NobreakService } from '../../data-access/nobreak.service';

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

  nobreak: Nobreak = {
    tag: 'Text',
    marca: 'Marca',
    modelo: 'Modelo',
    tensaoEntrada: 0,
    tensaoSaida: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private nobreakService: NobreakService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.nobreakService.find(parseInt(id!)).subscribe((nobreak) => {
      this.nobreak = nobreak;
    })

    this.editNobreakForm = this.formBuilder.group({
      tag: [''],
      marca: [''],
      modelo: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      tensao_entrada: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
      tensao_saida: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['tag', 'marca', 'modelo', 'tensao_entrada', 'tensao_saida'])
    })
  }

  OnSubmit() {
    this.nobreak.tag = this.editNobreakForm.get('tag')?.value;
    this.nobreak.marca = this.editNobreakForm.get('marca')?.value;
    this.nobreak.modelo = this.editNobreakForm.get('modelo')?.value;
    this.nobreak.tensaoEntrada = this.editNobreakForm.get('tensao_entrada')?.value;
    this.nobreak.tensaoSaida = this.editNobreakForm.get('tensao_saida')?.value;
    
    this.nobreakService.update(this.nobreak).subscribe(
      {
        next: () => {
          alert("Editado!");
          this.editNobreakForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.editNobreakForm.reset();
        }
      }
    )
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

  cancel() {
    this.router.navigate(['/equipments'])
  }

  confirmDelete(dado:boolean) {
    alert("Equipamento deletado!")
    if(this.nobreak.id) {
      this.nobreakService.delete(this.nobreak.id).subscribe(() => {
        this.router.navigate(['/equipments'])
      })
    }
    // aqui vai mandar dado pro service
  }

}
