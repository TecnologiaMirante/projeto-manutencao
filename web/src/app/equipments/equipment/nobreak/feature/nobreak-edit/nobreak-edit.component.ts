import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nobreak } from '../../data-access/nobreak';
import { NobreakService } from '../../data-access/nobreak.service';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-nobreak-edit',
  templateUrl: './nobreak-edit.component.html',
  styleUrls: ['./nobreak-edit.component.css']
})
export class NobreakEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "NBR0001";
  funcao:string = "Editar";
  equipment: string = "Nobreak";
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[1]; //Elétrica
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  nobreakForm!: FormGroup

  nobreak: Nobreak = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value,
    category: this.selectedEquipmentType.value, 
    tensaoEntrada: 0,
    tensaoSaida: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private nobreakService: NobreakService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {

    this.nobreakForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''], // futuramente verificar se o modelo ja existe no sistema criar um async validator
      status: [''],
      tensaoEntrada: [0, Validators.pattern("-?\\d+(\\.\\d+)?")],
      tensaoSaida: [0, Validators.pattern("-?\\d+(\\.\\d+)?")],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'tensaoEntrada', 'tensaoSaida'])
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.nobreakService.find(parseInt(id!)).subscribe(
      {
        next: (nobreak) => {
          this.nobreak = nobreak;        
          console.log(nobreak)
          const { dados_gerais, status, category, tensaoEntrada, tensaoSaida }: Nobreak = nobreak;
          const { codigo, marca, modelo } = dados_gerais;
          this.nobreakForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            tensaoEntrada,
            tensaoSaida,
            category
          });  
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === nobreak.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments'])
        }
      }
    )
  }

  OnSubmit() {
    this.nobreak.dados_gerais.codigo = this.nobreakForm.get('codigo')?.value;
    this.nobreak.dados_gerais.marca = this.nobreakForm.get('marca')?.value;
    this.nobreak.dados_gerais.modelo = this.nobreakForm.get('modelo')?.value;
    this.nobreak.tensaoEntrada = this.nobreakForm.get('tensaoEntrada')?.value;
    this.nobreak.tensaoSaida = this.nobreakForm.get('tensaoSaida')?.value;
    
    this.nobreakService.update(this.nobreak).subscribe(
      {
        next: () => {
          alert("Nobreak editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          alert(err.error.message);
          this.nobreakForm.reset();
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
    if(this.nobreak.id) {

      this.nobreakService.delete(this.nobreak.id).subscribe(
        {
          next: () => {
            alert("Equipamento deletado!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.nobreakForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: EquipmentStatus) {
    this.nobreak.status = value.value;
    this.nobreakForm.patchValue({
      category:value.value
    })
  }
}
