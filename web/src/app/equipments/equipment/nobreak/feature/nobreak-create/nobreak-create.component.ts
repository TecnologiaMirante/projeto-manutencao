import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NobreakService } from '../../data-access/nobreak.service';
import { Nobreak } from '../../data-access/nobreak';

@Component({
  selector: 'app-nobreak-create',
  templateUrl: './nobreak-create.component.html',
  styleUrls: ['./nobreak-create.component.css']
})
export class NobreakCreateComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "REC0001";
  funcao:string = "Criar Nobreak";

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao}`

  createNobreakForm!: FormGroup;

  nobreak: Nobreak = {
      tag: '',
      marca: '',
      modelo: '',
      tensaoEntrada: 0,
      tensaoSaida: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private nobreakService: NobreakService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createNobreakForm = this.formBuilder.group({
      tag: ['', 
        [
          Validators.required,
        ]
      ],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      tensao_entrada: ['', [Validators.required, Validators.pattern("^[0-9]\d*(\.\d+)?$")]],
      tensao_saida: ['', [Validators.required, Validators.pattern("^[0-9]\d*(\.\d+)?$")]],
    })
  }

  OnSubmit() {
    this.nobreak.tag = this.createNobreakForm.get('tag')?.value;
    this.nobreak.marca = this.createNobreakForm.get('marca')?.value;
    this.nobreak.modelo = this.createNobreakForm.get('modelo')?.value;
    this.nobreak.tensaoEntrada = this.createNobreakForm.get('tensao_entrada')?.value;
    this.nobreak.tensaoSaida = this.createNobreakForm.get('tensao_saida')?.value;
    
    this.nobreakService.create(this.nobreak).subscribe(
      {
        next: () => {
          alert("Criado!");
          this.createNobreakForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.createNobreakForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }
}

interface fieldsList {
  tag: string;
  marca: string;
  modelo: string;
  tensao_entrada: number;
  tensao_saida: number;
}