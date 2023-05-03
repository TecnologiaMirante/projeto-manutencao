import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DPS } from '../data-access/dps';
import { Router } from '@angular/router';
import { DpsService } from '../../data-access/dps.service';

@Component({
  selector: 'app-dps-create',
  templateUrl: './dps-create.component.html',
  styleUrls: ['./dps-create.component.css']
})
export class DpsCreateComponent implements OnInit   {
  cidade:string = "Cururupu";
  equipamento:string = "DPS0001";
  funcao:string = "Criar";
  equipment_type:string = "DPS"

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  dpsForm!: FormGroup;

  dps: DPS = {
    tag: '',
    marca: '',
    modelo: '',
    correnteMaxima: 0,
    classe: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private dpsService: DpsService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.dpsForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      correnteMaxima: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
      classe: ['', Validators.required]
    })
  }

  OnSubmit() {
    this.dps.tag = this.dpsForm.get('tag')?.value;
    this.dps.marca = this.dpsForm.get('marca')?.value;
    this.dps.modelo = this.dpsForm.get('modelo')?.value;
    this.dps.correnteMaxima = this.dpsForm.get('correnteMaxima')?.value;
    this.dps.classe = this.dpsForm.get('dps')?.value;
    
    this.dpsService.create(this.dps).subscribe(
      {
        next: () => {
          alert("DPS criado com sucesso!");
          this.dpsForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.dpsForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }
}
