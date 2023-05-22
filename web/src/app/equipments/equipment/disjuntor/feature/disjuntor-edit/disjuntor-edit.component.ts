import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disjuntor } from '../../data-access/disjuntor';
import { DisjuntorService } from '../../data-access/disjuntor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-disjuntor-edit',
  templateUrl: './disjuntor-edit.component.html',
  styleUrls: ['./disjuntor-edit.component.css']
})
export class DisjuntorEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "DJN0001";
  funcao:string = "Editar";
  equipment: string = "Disjuntor";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Elétrica
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);
  
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }
  
  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  
  disjuntorForm!: FormGroup;

  disjuntor: Disjuntor = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value, 
    corrente_maxima: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private disjuntorService: DisjuntorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.disjuntorForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      corrente_maxima: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'corrente_maxima'])
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.disjuntorService.find(parseInt(id!)).subscribe(
      {
        next: (disjuntor) => {
          this.disjuntor = disjuntor;
          const { dados_gerais, status, category, corrente_maxima }: Disjuntor = disjuntor;
          const { codigo, marca, modelo } = dados_gerais;
          this.disjuntorForm.patchValue({
            codigo,
            marca,
            modelo,
            status, 
            corrente_maxima,           
            category
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === disjuntor.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments'])
        }
      }
    )
  }

  OnSubmit() {
    this.disjuntor.dados_gerais.codigo = this.disjuntorForm.get('codigo')?.value;
    this.disjuntor.dados_gerais.marca = this.disjuntorForm.get('marca')?.value;
    this.disjuntor.dados_gerais.modelo = this.disjuntorForm.get('modelo')?.value;
    this.disjuntor.corrente_maxima = this.disjuntorForm.get('corrente_maxima')?.value;
    
    this.disjuntorService.update(this.disjuntor).subscribe(
      {
        next: () => {
          alert("Disjuntor editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.disjuntorForm.reset();
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
    if(this.disjuntor.id) {
      this.disjuntorService.delete(this.disjuntor.id).subscribe(
        {
          next: () => {
            alert("Disjuntor deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.disjuntorForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.disjuntorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.disjuntor.status = this.selectedEquipmentStatus.value;
  }
}
