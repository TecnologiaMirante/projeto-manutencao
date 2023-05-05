import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exaustor } from '../../data-access/exaustor';
import { ExaustorService } from '../../data-access/exaustor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exaustor-edit',
  templateUrl: './exaustor-edit.component.html',
  styleUrls: ['./exaustor-edit.component.css']
})
export class ExaustorEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "EXT0001";
  funcao:string = "Criar";
  equipment_type:string = "Exaustor"

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  exaustorForm!: FormGroup;

  exaustor: Exaustor = {
    tag: '',
    marca: '',
    modelo: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private exaustorService: ExaustorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.exaustorForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.exaustorService.find(parseInt(id!)).subscribe((exaustor) => {
      this.exaustor = exaustor;
    })

    this.exaustorService.find(parseInt(id!)).subscribe(
      {
        next: (exaustor) => {
          this.exaustorForm.patchValue(exaustor);
          this.exaustor = exaustor;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.exaustor.tag = this.exaustorForm.get('tag')?.value;
    this.exaustor.marca = this.exaustorForm.get('marca')?.value;
    this.exaustor.modelo = this.exaustorForm.get('modelo')?.value;
    
    this.exaustorService.update(this.exaustor).subscribe(
      {
        next: () => {
          alert("Exaustor editado com sucesso!");
          this.exaustorForm.reset();
        },
        error: (err) => {
          console.log(err.error.message);
          this.exaustorForm.reset();
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

  confirmCancel(dado:boolean) {
    this.router.navigate(['/equipments'])
  }

  confirmDelete(dado:boolean) {
    if(this.exaustor.id) {
      this.exaustorService.delete(this.exaustor.id).subscribe(
        {
          next: () => {
            alert("Exaustor deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.exaustorForm.reset();
          }
        }
      )

    }
  }
}
