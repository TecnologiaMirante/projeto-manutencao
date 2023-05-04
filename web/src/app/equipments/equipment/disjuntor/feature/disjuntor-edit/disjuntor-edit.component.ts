import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disjuntor } from '../../data-access/disjuntor';
import { DisjuntorService } from '../../data-access/disjuntor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disjuntor-edit',
  templateUrl: './disjuntor-edit.component.html',
  styleUrls: ['./disjuntor-edit.component.css']
})
export class DisjuntorEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "DJN0001";
  funcao:string = "Editar Disjuntor";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao}`
  
  disjuntorForm!: FormGroup;

  disjuntor: Disjuntor = {
    tag: 'Text',
    marca: 'Marca',
    modelo: 'Modelo',
    corrente_maxima: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private disjuntorService: DisjuntorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.disjuntorForm = this.formBuilder.group({
      tag: [''],
      marca: [''],
      modelo: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      corrente_maxima: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['tag', 'marca', 'modelo', 'corrente_maxima'])
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.disjuntorService.find(parseInt(id!)).subscribe(
      {
        next: (disjuntor) => {
          this.disjuntorForm.patchValue(disjuntor);
          this.disjuntor = disjuntor;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments'])
        }
      }
    )
  }

  OnSubmit() {
    this.disjuntor.tag = this.disjuntorForm.get('tag')?.value;
    this.disjuntor.marca = this.disjuntorForm.get('marca')?.value;
    this.disjuntor.modelo = this.disjuntorForm.get('modelo')?.value;
    this.disjuntor.corrente_maxima = this.disjuntorForm.get('corrente_maxima')?.value;
    
    this.disjuntorService.update(this.disjuntor).subscribe(
      {
        next: () => {
          alert("Disjuntor editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.disjuntorForm.reset();
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
    if(this.disjuntor.id) {
      this.disjuntorService.delete(this.disjuntor.id).subscribe(
        {
          next: () => {
            alert("Disjuntor deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.disjuntorForm.reset();
          }
        }
      )
    }


  }
}
