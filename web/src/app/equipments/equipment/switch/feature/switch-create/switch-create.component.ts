import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Switch } from '../../data-access/switch';
import { SwitchService } from '../../data-access/switch.service';
import { Router } from '@angular/router';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';

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

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[2]; //Telemetria
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  switchForm!: FormGroup;

  switch: Switch = {
    dados_gerais: this.dadosGerais,
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //TELEMETRIA
    qtdPortas: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private switchService: SwitchService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.switchForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      qtdPortas: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
    })
  }

  OnSubmit() {
    this.switch.dados_gerais.codigo = this.switchForm.get('codigo')?.value;
    this.switch.dados_gerais.marca = this.switchForm.get('marca')?.value;
    this.switch.dados_gerais.modelo = this.switchForm.get('modelo')?.value;
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

  OnEquipmentStatusSelected(value: string) {
    this.switchForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.switch.status = this.selectedEquipmentStatus.value;
  }
}
