import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EstruturaType, EstruturaTypeList } from '../../data-access/estrutura-type';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Torre } from '../../data-access/torre';
import { TorreService } from '../../data-access/torre.service';
import { Router } from '@angular/router';
import { AterramentoType, AterramentoTypesList } from '../../data-access/aterramento-option';

@Component({
  selector: 'app-torre-create',
  templateUrl: './torre-create.component.html',
  styleUrls: ['./torre-create.component.css']
})
export class TorreCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "TOR0001";
  funcao:string = "Criar";
  equipment: string = "Torre";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  estruturaTypes: EstruturaType[] = EstruturaTypeList;
  selectedEstruturaType: EstruturaType = this.estruturaTypes[0];
  estruturaTypeOptions: string[] = this.estruturaTypes.map(({ title }) => title);

  aterramentoTypes: AterramentoType[] = AterramentoTypesList;
  selectedAterramentoType: AterramentoType = this.aterramentoTypes[0];
  aterramentoTypeOptions: string[] = this.aterramentoTypes.map(({ title }) => title);

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }


  action_path: string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  
  torreForm!: FormGroup;

  torre: Torre = {
    dados_gerais: this.dadosGerais,
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    estrutura: this.selectedEstruturaType.value, //AUTOPORTANTE
    altura: 0,
    aterramento: this.selectedAterramentoType.value, //TRUE
  }

  constructor(
    private formBuilder: FormBuilder,
    private torreService: TorreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.torreForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      altura: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
      status: [''],
      estrutura: [''],
      aterramento: [''],
    })
  }

  OnSubmit() {
    this.torre.dados_gerais.codigo = this.torreForm.get('codigo')?.value;
    this.torre.dados_gerais.modelo = this.torreForm.get('modelo')?.value;
    this.torre.dados_gerais.marca = this.torreForm.get('marca')?.value;
    this.torre.altura = this.torreForm.get('altura')?.value;

    this.torreService.create(this.torre).subscribe(
      {
        next: () => {
          alert("Torre criada com sucesso!");
          this.torreForm.reset();
        },
        error: (err) => {
          console.log(err); //Remover isso quando testar com a api do backend
          this.torreForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments']);
  }

  OnEquipmentStatusSelected(value: string) {
    this.torreForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.torre.status = this.selectedEquipmentStatus.value;
  }

  OnEstruturaTypeSelected(value: string) {
    this.torreForm.patchValue({
      estrutura: value
    });

    this.selectedEstruturaType = this.estruturaTypes.find((estruturaType) => estruturaType.title === value)!;
    this.torre.estrutura = this.selectedEstruturaType.value;
  }

  OnAterramentoTypeSelected(value: string) {
    this.torreForm.patchValue({
      aterramento: value
    });

    this.selectedAterramentoType = this.aterramentoTypes.find((option) => option.title === value)!;
    this.torre.aterramento = this.selectedAterramentoType.value;
  }
}
