import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Switch } from '../../data-access/switch';
import { SwitchService } from '../../data-access/switch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-switch-edit',
  templateUrl: './switch-edit.component.html',
  styleUrls: ['./switch-edit.component.css']
})
export class SwitchEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "SWT0001";
  funcao:string = "Editar";
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
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value,
    qtdPortas: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private switchService: SwitchService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.switchForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''],
      category: [''],
      qtdPortas: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'qtdPortas'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.switchService.find(parseInt(id!)).subscribe(
      {
        next: (switch_object) => {
          this.switch = switch_object;
          console.log(switch_object);
          const { dados_gerais, status, category, qtdPortas }: Switch = switch_object;
          const { codigo, marca, modelo } = dados_gerais;
          this.switchForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            category,
            qtdPortas
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === switch_object.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.switch.dados_gerais.codigo = this.switchForm.get('codigo')?.value;
    this.switch.dados_gerais.marca = this.switchForm.get('marca')?.value;
    this.switch.dados_gerais.modelo = this.switchForm.get('modelo')?.value;
    this.switch.qtdPortas = this.switchForm.get('qtdPortas')?.value;
    
    this.switchService.update(this.switch).subscribe(
      {
        next: () => {
          alert("Switch editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.switchForm.reset();
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
    if(this.switch.id) {
      this.switchService.delete(this.switch.id).subscribe(
        {
          next: () => {
            alert("Switch deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.switchForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.switchForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.switch.status = this.selectedEquipmentStatus.value;
  }
}
