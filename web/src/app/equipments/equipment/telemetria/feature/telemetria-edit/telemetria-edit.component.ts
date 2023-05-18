import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Telemetria } from '../../data-access/telemetria';
import { ActivatedRoute, Router } from '@angular/router';
import { TelemetriaService } from '../../data-access/telemetria.service';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-telemetria-edit',
  templateUrl: './telemetria-edit.component.html',
  styleUrls: ['./telemetria-edit.component.css']
})
export class TelemetriaEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "TLM0001";
  funcao:string = "Editar";
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
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value, 
  }

  constructor(
    private formBuilder: FormBuilder,
    private telemetriaService: TelemetriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.telemetriaForm = this.formBuilder.group({
      codigo: [''],
      status: [''],
      marca: [''],
      modelo: [''],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.telemetriaService.find(parseInt(id!)).subscribe(
      {
        next: (telemetria) => {
          this.telemetria = telemetria;
          const { dados_gerais, status, category }: Telemetria = telemetria;
          const { codigo, marca, modelo } = dados_gerais;
          this.telemetriaForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            category
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === telemetria.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    );
  }

  OnSubmit() {
    this.telemetria.dados_gerais.codigo = this.telemetriaForm.get('codigo')?.value;
    this.telemetria.dados_gerais.marca = this.telemetriaForm.get('marca')?.value;
    this.telemetria.dados_gerais.modelo = this.telemetriaForm.get('modelo')?.value;
    
    this.telemetriaService.update(this.telemetria).subscribe(
      {
        next: () => {
          alert("Telemetria editada com sucesso!");
          this.router.navigate(['/equipments']);
        },
        error: (err) => {
          console.log(err);
          this.telemetriaForm.reset();
        }
      }
    )
  }

  atLeastOneHasValue(fields: Array<string>) {
    return (group:FormGroup) => {
      for (const fieldName of fields) {
        if (group.get(fieldName)!.value) {
          return null;
        }
      }
      return { atLeastOneHasValue: true };
    }
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  confirmCancel(dado:boolean) {
    this.cancel();
  }

  confirmDelete(dado:boolean) {
    if(this.telemetria.id) {
      this.telemetriaService.delete(this.telemetria.id).subscribe(
        {
          next: () => {
            alert("Telemetria deletada com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.telemetriaForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: EquipmentStatus) {
    this.telemetria.status = value.value;
    this.telemetriaForm.patchValue({
      category:value.value
    })
  }

}
