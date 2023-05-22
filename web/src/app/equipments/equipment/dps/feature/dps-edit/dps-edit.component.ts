import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DPS } from '../../data-access/dps';
import { DpsService } from '../../data-access/dps.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { DPSClass, DPSClassList } from '../../utils/dps-class';

@Component({
  selector: 'app-dps-edit',
  templateUrl: './dps-edit.component.html',
  styleUrls: ['./dps-edit.component.css']
})
export class DpsEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "DPS0001";
  funcao:string = "Editar";
  equipment: string = "DPS";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Elétrica

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);
  
  dpsClasses: DPSClass[] =  DPSClassList;
  selectedDPSClass: DPSClass = this.dpsClasses[0];
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
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value,
    corrente_maxima: 0,
    classe: this.selectedDPSClass.value,
  }

  constructor(
    private formBuilder: FormBuilder,
    private dpsService: DpsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.dpsForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      corrente_maxima: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
      classe: ['']
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'corrente_maxima', 'classe'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.dpsService.find(parseInt(id!)).subscribe(
      {
        next: (dps) => {
          this.dps = dps;
          const { dados_gerais, status, category, corrente_maxima, classe }: DPS = dps;
          const { codigo, marca, modelo } = dados_gerais;
          this.dpsForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            corrente_maxima,
            classe,
            category
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === dps.status)!;
          this.selectedDPSClass = DPSClassList.find((dpsClass) => dpsClass.value === dps.classe)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.dps.dados_gerais.codigo = this.dpsForm.get('codigo')?.value;
    this.dps.dados_gerais.marca = this.dpsForm.get('marca')?.value;
    this.dps.dados_gerais.modelo = this.dpsForm.get('modelo')?.value;
    this.dps.corrente_maxima = this.dpsForm.get('corrente_maxima')?.value;
    
    this.dpsService.update(this.dps).subscribe(
      {
        next: () => {
          alert("DPS editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.dpsForm.reset();
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
    if(this.dps.id) {
      this.dpsService.delete(this.dps.id).subscribe(
        {
          next: () => {
            alert("DPS deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.dpsForm.reset();
          }
        }
      )
    }
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
