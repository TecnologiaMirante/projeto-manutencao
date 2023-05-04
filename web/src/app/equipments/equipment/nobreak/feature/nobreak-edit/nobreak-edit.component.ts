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

    this.editNobreakForm = this.formBuilder.group({
      tag: [''],
      marca: [''],
      modelo: [''], // futuramente verificar se o modelo ja existe no sistema criar um async validator
      tensaoEntrada: [0, Validators.pattern("-?\\d+(\\.\\d+)?")],
      tensaoSaida: [0, Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['tag', 'marca', 'modelo', 'tensaoEntrada', 'tensaoSaida'])
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.nobreakService.find(parseInt(id!)).subscribe(
      {
        next: (nobreak) => {
          this.editNobreakForm.patchValue(nobreak);  
          this.nobreak = nobreak;        
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments'])
        }
      }
    )
  }

  OnSubmit() {
    this.nobreak.tag = this.editNobreakForm.get('tag')?.value;
    this.nobreak.marca = this.editNobreakForm.get('marca')?.value;
    this.nobreak.modelo = this.editNobreakForm.get('modelo')?.value;
    this.nobreak.tensaoEntrada = this.editNobreakForm.get('tensaoEntrada')?.value;
    this.nobreak.tensaoSaida = this.editNobreakForm.get('tensaoSaida')?.value;
    
    this.nobreakService.update(this.nobreak).subscribe(
      {
        next: () => {
          alert("Nobreak editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          alert(err.error.message);
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
    if(this.nobreak.id) {

      this.nobreakService.delete(this.nobreak.id).subscribe(
        {
          next: () => {
            alert("Equipamento deletado!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.editNobreakForm.reset();
          }
        }
      )
    }
  }

}
