import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DPS } from '../../data-access/dps';
import { Router } from '@angular/router';
import { DpsService } from '../../data-access/dps.service';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { DPSClass, DPSClassList } from '../../utils/dps-class';

@Component({
  selector: 'app-dps-create',
  templateUrl: './dps-create.component.html',
  styleUrls: ['./dps-create.component.css']
})
export class DpsCreateComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "DPS0001";
  funcao:string = "Criar";
  equipment: string = "DPS";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Elétrica
  typesOptions: string[] = this.equipmentTypes.map(({ title }) => title);
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  dpsClasses: DPSClass[] =  DPSClassList;
  selectedDPSClass: DPSClass = this.dpsClasses[0]; //D_1
  dpsOptions: string[] = this.dpsClasses.map(({ title }) => title);
  
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  dpsForm!: FormGroup;

  dps: DPS = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //ELETRICA
    corrente_maxima: 0,
    classe: this.selectedDPSClass.value,
  }

  constructor(
    private formBuilder: FormBuilder,
    private dpsService: DpsService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.dpsForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      status: [''],
      corrente_maxima: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
      classe: ['']
    })
  }

  OnSubmit() {
    this.dps.dados_gerais.codigo = this.dpsForm.get('codigo')?.value;
    this.dps.dados_gerais.marca = this.dpsForm.get('marca')?.value;
    this.dps.dados_gerais.modelo = this.dpsForm.get('modelo')?.value;
    this.dps.corrente_maxima = this.dpsForm.get('corrente_maxima')?.value;

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

  OnEquipmentStatusSelected(value: string) {
    this.dpsForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.dps.status = this.selectedEquipmentStatus.value;
  }

  OnClassSelected(value: string) {
    this.dpsForm.patchValue({
      classe:value
    });
    
    this.selectedDPSClass = this.dpsClasses.find((dpsClass) => dpsClass.title === value)!;
    this.dps.classe = this.selectedDPSClass.value;
  }
}
