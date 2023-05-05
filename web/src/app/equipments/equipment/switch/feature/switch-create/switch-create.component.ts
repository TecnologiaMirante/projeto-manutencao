import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Switch } from '../../data-access/switch';
import { SwitchService } from '../../data-access/switch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-create',
  templateUrl: './switch-create.component.html',
  styleUrls: ['./switch-create.component.css']
})
export class SwitchCreateComponent implements OnInit{
  cidade:string = "Cururupu";
  equipamento:string = "SWT0001";
  funcao:string = "Criar";
  equipment_type:string = "Switch"

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  switchForm!: FormGroup;

  switch: Switch = {
    tag: '',
    marca: '',
    modelo: '',
    qtdPortas: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private switchService: SwitchService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.switchForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      qtdPortas: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
    })
  }

  OnSubmit() {
    this.switch.tag = this.switchForm.get('tag')?.value;
    this.switch.marca = this.switchForm.get('marca')?.value;
    this.switch.modelo = this.switchForm.get('modelo')?.value;
    this.switch.qtdPortas = this.switchForm.get('qtdPortas')?.value;
    
    this.switchService.create(this.switch).subscribe(
      {
        next: () => {
          alert("Switch criado com sucesso!");
          this.switchForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.switchForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }
}
