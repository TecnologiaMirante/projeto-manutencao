import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArCondicionado } from '../../data-access/ar-condicionado';
import { ArCondicionadoService } from '../../data-access/ar-condicionado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-ar-condicionado-edit',
  templateUrl: './ar-condicionado-edit.component.html',
  styleUrls: ['./ar-condicionado-edit.component.css']
})
export class ArCondicionadoEditComponent {

  cidade:string = "Cururupu";
  equipamento:string = "ARC0001";
  funcao:string = "Editar";
  equipment_type:string = "Ar Condicionado"
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[2]; //Refrigeração
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  arCondicionadoForm!: FormGroup;

  arCondicionado: ArCondicionado = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value,
    potencia: 0,
    tensao: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private arCondicionadoService: ArCondicionadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.arCondicionadoForm = this.formBuilder.group({
      codigo: ['', ],
      marca: ['', ],
      modelo: ['', ],
      status: [''],
      potencia: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
      tensao: ['', Validators.pattern("-?\\d+(\\.\\d+)?")]
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.arCondicionadoService.find(parseInt(id!)).subscribe((arCondicionado) => {
      this.arCondicionado = arCondicionado;
    })

    this.arCondicionadoService.find(parseInt(id!)).subscribe(
      {
        next: (arCondicionado) => {
          this.arCondicionadoForm.patchValue(arCondicionado);
          this.arCondicionado = arCondicionado;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.arCondicionado.dados_gerais.codigo = this.arCondicionadoForm.get('codigo')?.value;
    this.arCondicionado.dados_gerais.marca = this.arCondicionadoForm.get('marca')?.value;
    this.arCondicionado.dados_gerais.modelo = this.arCondicionadoForm.get('modelo')?.value;
    this.arCondicionado.potencia = this.arCondicionadoForm.get('potencia')?.value;
    this.arCondicionado.tensao = this.arCondicionadoForm.get('tensao')?.value;
    
    this.arCondicionadoService.update(this.arCondicionado).subscribe(
      {
        next: () => {
          alert("Ar condicionado editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.arCondicionadoForm.reset();
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
    if(this.arCondicionado.id) {
      this.arCondicionadoService.delete(this.arCondicionado.id).subscribe(
        {
          next: () => {
            alert("Ar condicionado deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.arCondicionadoForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: EquipmentStatus) {
    this.arCondicionado.status = value.value;
    this.arCondicionadoForm.patchValue({
      category:value.value
    })
  }
}
