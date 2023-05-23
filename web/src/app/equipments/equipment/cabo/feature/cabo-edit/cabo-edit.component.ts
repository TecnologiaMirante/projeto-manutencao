import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { CaboType, CaboTypeList } from '../../data-access/cabo-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Cabo } from '../../data-access/cabo';
import { CaboService } from '../../data-access/cabo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabo-edit',
  templateUrl: './cabo-edit.component.html',
  styleUrls: ['./cabo-edit.component.css']
})
export class CaboEditComponent {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.caboForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      tamanho: [''],
      status: [''],
      tipo: [''],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'tamanho'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.caboService.find(parseInt(id!)).subscribe(
      {
        next: (cabo) => {
          this.cabo = cabo;
          const { dados_gerais, status, category, tamanho, tipo }: Cabo = cabo;
          const { codigo, marca, modelo } = dados_gerais;
          this.caboForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            category,
            tamanho,
            tipo
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === cabo.status)!;
          this.selectedCaboType = CaboTypeList.find((equipment) => equipment.value === cabo.tipo)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    );
  }

  OnSubmit() {
    this.cabo.dados_gerais.codigo = this.caboForm.get('codigo')?.value;
    this.cabo.dados_gerais.marca = this.caboForm.get('marca')?.value;
    this.cabo.dados_gerais.modelo = this.caboForm.get('modelo')?.value;
    this.cabo.tamanho = this.caboForm.get('tamanho')?.value;
    
    this.caboService.update(this.cabo).subscribe(
      {
        next: () => {
          alert("Cabo editado com sucesso!");
          this.router.navigate(['/equipments']);
        },
        error: (err) => {
          console.log(err);
          this.caboForm.reset();
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
    if(this.cabo.id) {
      this.caboService.delete(this.cabo.id).subscribe(
        {
          next: () => {
            alert("Cabo deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.caboForm.reset();
          }
        }
      )
    }
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
