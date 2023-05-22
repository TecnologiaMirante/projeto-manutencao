import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exaustor } from '../../data-access/exaustor';
import { ExaustorService } from '../../data-access/exaustor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-exaustor-edit',
  templateUrl: './exaustor-edit.component.html',
  styleUrls: ['./exaustor-edit.component.css']
})
export class ExaustorEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "EXT0001";
  funcao:string = "Editar";
  equipment: string = "Exaustor";
  
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Refrigeração
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);
  
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  exaustorForm!: FormGroup;

  exaustor: Exaustor = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value, 
  }

  constructor(
    private formBuilder: FormBuilder,
    private exaustorService: ExaustorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.exaustorForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: ['']
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo'])
    } )

    const id = this.route.snapshot.paramMap.get('id');
    this.exaustorService.find(parseInt(id!)).subscribe(
      {
        next: (exaustor) => {
          this.exaustor = exaustor;
          const { dados_gerais, status, category }: Exaustor = exaustor;
          const { codigo, marca, modelo } = dados_gerais;
          this.exaustorForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            category
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === exaustor.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.exaustor.dados_gerais.codigo = this.exaustorForm.get('codigo')?.value;
    this.exaustor.dados_gerais.marca = this.exaustorForm.get('marca')?.value;
    this.exaustor.dados_gerais.modelo = this.exaustorForm.get('modelo')?.value;
    
    this.exaustorService.update(this.exaustor).subscribe(
      {
        next: () => {
          alert("Exaustor editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.exaustorForm.reset();
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
    if(this.exaustor.id) {
      this.exaustorService.delete(this.exaustor.id).subscribe(
        {
          next: () => {
            alert("Exaustor deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.exaustorForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.exaustorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.exaustor.status = this.selectedEquipmentStatus.value;
  }
}
