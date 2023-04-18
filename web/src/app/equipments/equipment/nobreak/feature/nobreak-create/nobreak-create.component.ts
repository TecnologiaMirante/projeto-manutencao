import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createNobreakForm = this.formBuilder.group({
      tag: ['', 
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]*$')
        ]
      ],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      tensao_entrada: ['', Validators.required],
      tensao_saida: ['', Validators.required],
    })

    // this.createNobreakForm = new FormGroup({
    //   tag: new FormControl('', [ Validators.required ]),
    //   marca: new FormControl('', [ Validators.required ]),
    //   modelo: new FormControl('', [ Validators.required ]),
    //   tensao_entrada: new FormControl('', [ Validators.required ]),
    //   tensao_saida: new FormControl('', [ Validators.required ])
    // });
  }

  OnSubmit() {
    const tag = this.createNobreakForm.get('tag')?.value;
    const marca = this.createNobreakForm.get('marca')?.value;
    const modelo = this.createNobreakForm.get('modelo')?.value;
    const tensao_entrada = this.createNobreakForm.get('tensao_entrada')?.value;
    const tensao_saida = this.createNobreakForm.get('tensao_saida')?.value;
    
    alert(tag)
    alert(marca)
    alert(modelo)
    alert(tensao_entrada)
    alert(tensao_saida)
  }
}

interface fieldsList {
  tag: string;
  marca: string;
  modelo: string;
  tensao_entrada: number;
  tensao_saida: number;
}