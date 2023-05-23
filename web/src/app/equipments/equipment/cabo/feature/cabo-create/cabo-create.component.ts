import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Cabo } from '../../data-access/cabo';
import { CaboType, CaboTypeList } from '../../data-access/cabo-type';
import { CaboService } from '../../data-access/cabo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabo-create',
  templateUrl: './cabo-create.component.html',
  styleUrls: ['./cabo-create.component.css']
})
export class CaboCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "CAB0001";
  funcao:string = "Criar";
  equipment: string = "Cabo";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);
  
  caboTypes: CaboType[] = CaboTypeList;
  selectedCaboType: CaboType = this.caboTypes[0];
  caboOptions: string[] = this.caboTypes.map(({ title }) => title);

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  caboForm!: FormGroup;

  cabo: Cabo = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    tamanho:0,
    tipo: this.selectedCaboType.value // 7/8"
  }

  constructor(
    private formBuilder: FormBuilder,
    private caboService: CaboService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.caboForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      tamanho: ['', Validators.required],
      status: [''],
      tipo: [''],
    });
  }
  
  OnSubmit() {
    this.cabo.dados_gerais.codigo = this.caboForm.get('codigo')?.value;
    this.cabo.dados_gerais.marca = this.caboForm.get('marca')?.value;
    this.cabo.dados_gerais.modelo = this.caboForm.get('modelo')?.value;
    this.cabo.tamanho = this.caboForm.get('tamanho')?.value;
    
    this.caboService.create(this.cabo).subscribe(
      {
        next: () => {
          alert("Cabo criado com sucesso!");
          this.caboForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.caboForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: string) {
    this.caboForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.cabo.status = this.selectedEquipmentStatus.value;
  }

  OnCaboTypeSelected(value: string) {
    this.caboForm.patchValue({
      cabo:value
    });

    this.selectedCaboType = this.caboTypes.find((cabo) => cabo.title === value)!;
    this.cabo.tipo = this.selectedCaboType.value;
  }
}
