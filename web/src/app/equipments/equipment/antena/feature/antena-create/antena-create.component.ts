import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { AntenaType, AntenaTypeList } from '../../data-access/antena-type';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Antena } from '../../data-access/antena';
import { AntenaService } from '../../data-access/antena.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antena-create',
  templateUrl: './antena-create.component.html',
  styleUrls: ['./antena-create.component.css']
})
export class AntenaCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "ANT0001";
  funcao:string = "Criar";
  equipment: string = "Antena";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  antenaTypes: AntenaType[] = AntenaTypeList;
  selectedAntenaType: AntenaType = this.antenaTypes[0];
  antenaTypeOptions: string[] = this.antenaTypes.map(({ title }) => title);

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path: string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  
  antenaForm!: FormGroup;

  antena: Antena = {
    dados_gerais: this.dadosGerais,
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    tipos_antena: this.selectedAntenaType.value, //AUTOPORTANTE
    gain: "",
    fendas: 0,
  }

  constructor(
    private formBuilder: FormBuilder,
    private antenaService: AntenaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.antenaForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      status: [''],
      gain: ['', Validators.required],
      fendas: ['', [ Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?") ]],
      tipos_antena: [''],
      nv: ['', Validators.pattern("-?\\d+(\\.\\d+)?") ],
      posicao_torre: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
    })
  }

  OnSubmit() {
    this.antena.dados_gerais.codigo = this.antenaForm.get('codigo')?.value;
    this.antena.dados_gerais.modelo = this.antenaForm.get('modelo')?.value;
    this.antena.dados_gerais.marca = this.antenaForm.get('marca')?.value;
    this.antena.gain = this.antenaForm.get('gain')?.value;
    this.antena.fendas = this.antenaForm.get('fendas')?.value;
    this.antena.nv = this.antenaForm.get('nv')?.value;
    this.antena.posicao_torre = this.antenaForm.get('posicao_torre')?.value;

    this.antenaService.create(this.antena).subscribe(
      {
        next: () => {
          alert("Antena criada com sucesso!");
          this.antenaForm.reset();
        },
        error: (err) => {
          console.log(err); //Remover isso quando testar com a api do backend
          this.antenaForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments']);
  }

  OnEquipmentStatusSelected(value: string) {
    this.antenaForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.antena.status = this.selectedEquipmentStatus.value;
  }

  OnAntenaTypeSelected(value: string) {
    this.antenaForm.patchValue({
      tipos_antena: value
    });

    this.selectedAntenaType = this.antenaTypes.find((antenaType) => antenaType.title === value)!;
    this.antena.tipos_antena = this.selectedAntenaType.value;
  }
}
