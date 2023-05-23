import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EstruturaType, EstruturaTypeList } from '../../data-access/estrutura-type';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Torre } from '../../data-access/torre';
import { TorreService } from '../../data-access/torre.service';
import { Router } from '@angular/router';

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
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Irradiação

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  estruturaTypes: EstruturaType[] = EstruturaTypeList;
  selectedEstruturaClass: EstruturaType = this.estruturaTypes[0]; //AUTOPORTANTE
  estruturaOptions: string[] = this.estruturaTypes.map(({ title }) => title);

  aterramentoOptions: boolean [] = [
    false,
    true
  ];

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  torreForm!: FormGroup;

  torre: Torre = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //Irradiação
    estrutura: this.selectedEstruturaClass.value, //Autoportante
    aterramento: this.aterramentoOptions[0], //False
    altura: 0,
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
      status: [''],
      estrutura: [''],
      aterramento: [''],
      altura: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]]
    })
  }

  OnSubmit() {
    this.torre.dados_gerais.codigo = this.torreForm.get('codigo')?.value;
    this.torre.dados_gerais.marca = this.torreForm.get('marca')?.value;
    this.torre.dados_gerais.modelo = this.torreForm.get('modelo')?.value;
    this.torre.altura = this.torreForm.get('altura')?.value;

    this.torreService.create(this.torre).subscribe(
      {
        next: () => {
          alert("Torre criada com sucesso!");
          this.torreForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.torreForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: string) {
    this.torreForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.torre.status = this.selectedEquipmentStatus.value;
  }

  OnEstruturaSelected(value: string) {
    this.torreForm.patchValue({
      estrutura:value
    });
    
    this.selectedEstruturaClass = this.estruturaTypes.find((estruturaType) => estruturaType.title === value)!;
    this.torre.estrutura = this.selectedEstruturaClass.value;
  }
}
