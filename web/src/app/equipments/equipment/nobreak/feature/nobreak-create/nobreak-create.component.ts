import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NobreakService } from '../../data-access/nobreak.service';
import { Nobreak } from '../../data-access/nobreak';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-nobreak-create',
  templateUrl: './nobreak-create.component.html',
  styleUrls: ['./nobreak-create.component.css']
})
export class NobreakCreateComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "REC0001";
  funcao:string = "Criar";
  equipment: string = "Nobreak";
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Elétrica
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  nobreakForm!: FormGroup;

  nobreak: Nobreak = {
      dados_gerais: this.dadosGerais, 
      status: this.selectedEquipmentStatus.value, //FUNCIONANDO
      category: this.selectedEquipmentType.value, //ELETRICA
      tensaoEntrada: 0,
      tensaoSaida: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private nobreakService: NobreakService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nobreakForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      status: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      tensaoEntrada: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
      tensaoSaida: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
    })
  }

  OnSubmit() {
    this.nobreak.dados_gerais.codigo = this.nobreakForm.get('codigo')?.value;
    this.nobreak.dados_gerais.marca = this.nobreakForm.get('marca')?.value;
    this.nobreak.dados_gerais.modelo = this.nobreakForm.get('modelo')?.value;
    this.nobreak.tensaoEntrada = this.nobreakForm.get('tensaoEntrada')?.value;
    this.nobreak.tensaoSaida = this.nobreakForm.get('tensaoSaida')?.value;
    
    this.nobreakService.create(this.nobreak).subscribe(
      {
        next: () => {
          alert("Nobreak criado com sucesso!");
          this.nobreakForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.nobreakForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: EquipmentStatus) {
    this.nobreak.status = value.value;
    this.nobreakForm.patchValue({
      category:value.value
    });
  }
}