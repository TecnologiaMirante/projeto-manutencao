import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { AntenaType, AntenaTypeList } from '../../data-access/antena-type';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Antena } from '../../data-access/antena';
import { ActivatedRoute, Router } from '@angular/router';
import { AntenaService } from '../../data-access/antena.service';

@Component({
  selector: 'app-antena-edit',
  templateUrl: './antena-edit.component.html',
  styleUrls: ['./antena-edit.component.css']
})
export class AntenaEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "ANT0001";
  funcao:string = "Editar";
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.antenaForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''],
      gain: [''],
      fendas: ['', Validators.pattern("-?\\d+(\\.\\d+)?") ],
      tipos_antena: [''],
      nv: ['', Validators.pattern("-?\\d+(\\.\\d+)?") ],
      posicao_torre: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'gain', 'fendas', 'nv', 'posicao_torre'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.antenaService.find(parseInt(id!)).subscribe(
      {
        next: (antena) => {
          this.antena = antena;
          const { dados_gerais, status, category, gain, fendas, tipos_antena, nv, posicao_torre }: Antena = antena;
          const { codigo, marca, modelo } = dados_gerais;
          this.antenaForm.patchValue({
            codigo,
            marca,
            modelo,
            status,            
            category,
            gain,
            fendas,
            tipos_antena,
            nv,
            posicao_torre
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === antena.status)!;
          this.selectedAntenaType = AntenaTypeList.find((antenaType) => antenaType.value === antena.tipos_antena)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    );
  }

  OnSubmit() {
    this.antena.dados_gerais.codigo = this.antenaForm.get('codigo')?.value;
    this.antena.dados_gerais.modelo = this.antenaForm.get('modelo')?.value;
    this.antena.dados_gerais.marca = this.antenaForm.get('marca')?.value;
    this.antena.gain = this.antenaForm.get('gain')?.value;
    this.antena.fendas = this.antenaForm.get('fendas')?.value;
    this.antena.nv = this.antenaForm.get('nv')?.value;
    this.antena.posicao_torre = this.antenaForm.get('posicao_torre')?.value;

    this.antenaService.update(this.antena).subscribe(
      {
        next: () => {
          alert("Antena editada com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.antenaForm.reset();
        }
      }
    )
  }

  atLeastOneHasValue(fields: Array<string>) {
    return (group: FormGroup) => {
      for (const fieldName of fields) {
        if (group.get(fieldName)!.value) {
          return null;
        }
      }
      return { atLeastOneFieldFilled: true };
    }
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  confirmCancel(dado:boolean) {
    this.router.navigate(['/equipments'])
  }

  confirmDelete(dado:boolean) {
    if(this.antena.id) {
      this.antenaService.delete(this.antena.id).subscribe(
        {
          next: () => {
            alert("Antena deletada com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.antenaForm.reset();
          }
        }
      )
    }
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
