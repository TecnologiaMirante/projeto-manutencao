import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exaustor } from '../../data-access/exaustor';
import { ExaustorService } from '../../data-access/exaustor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exaustor-create',
  templateUrl: './exaustor-create.component.html',
  styleUrls: ['./exaustor-create.component.css']
})
export class ExaustorCreateComponent implements OnInit {
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
    private router: Router    
  ) {}

  
  ngOnInit(): void {
    this.exaustorForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
    })
  }

  OnSubmit() {
    this.exaustor.tag = this.exaustorForm.get('tag')?.value;
    this.exaustor.marca = this.exaustorForm.get('marca')?.value;
    this.exaustor.modelo = this.exaustorForm.get('modelo')?.value;
    
    this.exaustorService.create(this.exaustor).subscribe(
      {
        next: () => {
          alert("Exaustor criado com sucesso!");
          this.exaustorForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.exaustorForm.reset();
        }
      }
    )
  }
  
  cancel() {
    this.router.navigate(['/equipments'])
  }
}
