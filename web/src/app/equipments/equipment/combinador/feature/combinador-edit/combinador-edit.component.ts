import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Combinador } from '../../data-access/combinador';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { CombinadorService } from '../../data-access/combinador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-combinador-edit',
  templateUrl: './combinador-edit.component.html',
  styleUrls: ['./combinador-edit.component.css']
})
export class CombinadorEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "CMB0001";
  funcao:string = "Editar";
  equipment: string = "Combinador";
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  combinadorForm!: FormGroup;

  combinador: Combinador = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value, 
  }

  constructor(
    private formBuilder: FormBuilder,
    private combinadorService: CombinadorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.combinadorForm = this.formBuilder.group({
      codigo: [''],
      status: [''],
      marca: [''],
      modelo: [''],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.combinadorService.find(parseInt(id!)).subscribe(
      {
        next: (combinador) => {
          this.combinador = combinador;
          const { dados_gerais, status, category }: Combinador = combinador;
          const { codigo, marca, modelo } = dados_gerais;
          this.combinadorForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            category
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === combinador.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    );
  }

  OnSubmit() {
    this.combinador.dados_gerais.codigo = this.combinadorForm.get('codigo')?.value;
    this.combinador.dados_gerais.marca = this.combinadorForm.get('marca')?.value;
    this.combinador.dados_gerais.modelo = this.combinadorForm.get('modelo')?.value;
    
    this.combinadorService.update(this.combinador).subscribe(
      {
        next: () => {
          alert("Combinador editado com sucesso!");
          this.router.navigate(['/equipments']);
        },
        error: (err) => {
          console.log(err);
          this.combinadorForm.reset();
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
    if(this.combinador.id) {
      this.combinadorService.delete(this.combinador.id).subscribe(
        {
          next: () => {
            alert("Combinador deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.combinadorForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: EquipmentStatus) {
    this.combinador.status = value.value;
    this.combinadorForm.patchValue({
      category:value.value
    })
  }
}
