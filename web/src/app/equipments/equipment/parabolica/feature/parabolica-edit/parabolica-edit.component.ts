import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Parabolica } from '../../data-access/parabolica';
import { ParabolicaService } from '../../data-access/parabolica.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parabolica-edit',
  templateUrl: './parabolica-edit.component.html',
  styleUrls: ['./parabolica-edit.component.css']
})
export class ParabolicaEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "PAR0001";
  funcao:string = "Editar";
  equipment: string = "Parabólica";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path: string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  
  parabolicaForm!: FormGroup;

  parabolica: Parabolica = {
    dados_gerais: this.dadosGerais,
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    diametro: 0,
    satelite: ""
  }

  constructor(
    private formBuilder: FormBuilder,
    private parabolicaService: ParabolicaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.parabolicaForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''], //ENUM
      satelite: [''],
      diametro: [''],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'satelite', 'diametro'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.parabolicaService.find(parseInt(id!)).subscribe(
      {
        next: (parabolica) => {
          this.parabolica = parabolica;
          const { dados_gerais, status, category, diametro, satelite }: Parabolica = parabolica;
          const { codigo, marca, modelo } = dados_gerais;
          this.parabolicaForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            category,
            diametro,
            satelite
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === parabolica.status)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    );
  }

  OnSubmit() {
    this.parabolica.dados_gerais.codigo = this.parabolicaForm.get('codigo')?.value;
    this.parabolica.dados_gerais.modelo = this.parabolicaForm.get('modelo')?.value;
    this.parabolica.dados_gerais.marca = this.parabolicaForm.get('marca')?.value;
    this.parabolica.diametro = this.parabolicaForm.get('diametro')?.value;
    this.parabolica.satelite = this.parabolicaForm.get('satelite')?.value;

    this.parabolicaService.update(this.parabolica).subscribe(
      {
        next: () => {
          alert("Parabólica editada com sucesso!");
          this.router.navigate(['/equipments']);
        },
        error: (err) => {
          console.log(err);
          this.parabolicaForm.reset();
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
    if(this.parabolica.id) {
      this.parabolicaService.delete(this.parabolica.id).subscribe(
        {
          next: () => {
            alert("Parabólica deletada com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.parabolicaForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.parabolicaForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.parabolica.status = this.selectedEquipmentStatus.value;
  }
}
