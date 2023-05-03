import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Disjuntor } from '../../data-access/disjuntor';
import { DisjuntorService } from '../../data-access/disjuntor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disjuntor-edit',
  templateUrl: './disjuntor-edit.component.html',
  styleUrls: ['./disjuntor-edit.component.css']
})
export class DisjuntorEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "DJN0001";
  funcao:string = "Editar Disjuntor";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao}`
  
  disjuntorForm!: FormGroup;

  disjuntor: Disjuntor = {
    tag: 'Text',
    marca: 'Marca',
    modelo: 'Modelo',
    correnteMaxima: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private disjuntorService: DisjuntorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.disjuntorService.find(parseInt(id!)).subscribe((disjuntor) => {
      this.disjuntor = disjuntor;
    })

    this.disjuntorForm = this.formBuilder.group({
      tag: [''],
      marca: [''],
      modelo: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      correnteMaxima: [''],
    }, {
      validators: this.atLeastOneHasValue(['tag', 'marca', 'modelo', 'correnteMaxima'])
    })


  }

  OnSubmit() {
    this.disjuntor.tag = this.disjuntorForm.get('tag')?.value;
    this.disjuntor.marca = this.disjuntorForm.get('marca')?.value;
    this.disjuntor.modelo = this.disjuntorForm.get('modelo')?.value;
    this.disjuntor.correnteMaxima = this.disjuntorForm.get('correnteMaxima')?.value;
    
    alert("Disjuntor editado com sucesso!");

    this.disjuntorService.update(this.disjuntor).subscribe(
      {
        next: () => {
          alert("Disjuntor editado com sucesso!");
          this.disjuntorForm.reset();
        },
        error: (err) => {
          console.log(err);
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
    alert("Disjuntor deletado!")
    if(this.disjuntor.id) {
      this.disjuntorService.delete(this.disjuntor.id).subscribe(() => {
        this.router.navigate(['/equipments'])
      })
    }
    // aqui vai mandar dado pro service
  }
}
