import { Component } from '@angular/core';
import { Telemetria } from '../../data-access/telemetria';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TelemetriaService } from '../../data-access/telemetria.service';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-telemetria-create',
  templateUrl: './telemetria-create.component.html',
  styleUrls: ['./telemetria-create.component.css']
})
export class TelemetriaCreateComponent {

  cidade:string = "Cururupu";
  equipamento:string = "TLM0001";
  funcao:string = "Criar";
  equipment: string = "Telemetria";
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[2]; //Telemetria
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  telemetriaForm!: FormGroup;

  telemetria: Telemetria = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //TELEMETRIA
  }

  constructor(
    private formBuilder: FormBuilder,
    private telemetriaService: TelemetriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.telemetriaForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      status: [''],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
    })
  }

  OnSubmit() {
    this.telemetria.dados_gerais.codigo = this.telemetriaForm.get('codigo')?.value;
    this.telemetria.dados_gerais.marca = this.telemetriaForm.get('marca')?.value;
    this.telemetria.dados_gerais.modelo = this.telemetriaForm.get('modelo')?.value;    

    this.telemetriaService.create(this.telemetria).subscribe(
      {
        next: () => {
          alert("Telemetria criada com sucesso!");
          this.telemetriaForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.telemetriaForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments']);
  }

  OnEquipmentStatusSelected(value: EquipmentStatus) {
    this.telemetria.status = value.value;
    this.telemetriaForm.patchValue({
      category:value.value
    });
  }
}
