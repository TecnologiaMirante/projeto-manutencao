import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disjuntor } from '../../data-access/disjuntor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disjuntor-create',
  templateUrl: './disjuntor-create.component.html',
  styleUrls: ['./disjuntor-create.component.css']
})
export class DisjuntorCreateComponent implements OnInit  {
  cidade:string = "Cururupu";
  equipamento:string = "DJN0001";
  funcao:string = "Criar Disjuntor";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao}`

  disjuntorForm!: FormGroup;

  disjuntor: Disjuntor = {
    tag: '',
    marca: '',
    modelo: '',
    correnteMaxima: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.disjuntorForm = this.formBuilder.group({
      tag: ['', 
        [
          Validators.required,
        ]
      ],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      correnteMaxima: ['', [Validators.required, Validators.pattern("^[0-9]\d*(\.\d+)?$")]],
    })
  }

  OnSubmit() {
    this.disjuntor.tag = this.disjuntorForm.get('tag')?.value;
    this.disjuntor.marca = this.disjuntorForm.get('marca')?.value;
    this.disjuntor.modelo = this.disjuntorForm.get('modelo')?.value;
    this.disjuntor.correnteMaxima = this.disjuntorForm.get('tensao_entrada')?.value;
    
    alert("Criado!")

    // this.disjuntorService.create(this.nobreak).subscribe(
    //   {
    //     next: () => {
    //       alert("Criado!");
    //       this.createNobreakForm.reset();
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       this.createNobreakForm.reset();
    //     }
    //   }
    // )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }
}
