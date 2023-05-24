import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EstruturaType, EstruturaTypeList } from '../../data-access/estrutura-type';
import { AterramentoType, AterramentoTypesList } from '../../data-access/aterramento-option';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Torre } from '../../data-access/torre';
import { TorreService } from '../../data-access/torre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-torre-edit',
  templateUrl: './torre-edit.component.html',
  styleUrls: ['./torre-edit.component.css']
})
export class TorreEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "TOR0001";
  funcao:string = "Criar";
  equipment: string = "Torre";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação

  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  estruturaTypes: EstruturaType[] = EstruturaTypeList;
  selectedEstruturaType: EstruturaType = this.estruturaTypes[0];
  estruturaTypeOptions: string[] = this.estruturaTypes.map(({ title }) => title);

  aterramentoTypes: AterramentoType[] = AterramentoTypesList;
  selectedAterramentoType: AterramentoType = this.aterramentoTypes[0];
  aterramentoTypeOptions: string[] = this.aterramentoTypes.map(({ title }) => title);
  
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path: string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  
  torreForm!: FormGroup;

  torre: Torre = {
    dados_gerais: this.dadosGerais,
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    estrutura: this.selectedEstruturaType.value, //AUTOPORTANTE
    altura: 0,
    aterramento: this.selectedAterramentoType.value, //TRUE
  }

  constructor(
    private formBuilder: FormBuilder,
    private torreService: TorreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.torreForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      altura: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
      status: [''],
      estrutura: [''],
      aterramento: [''],
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'altura'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.torreService.find(parseInt(id!)).subscribe(
      {
        next: (torre) => {
          this.torre = torre;
          const { dados_gerais, status, category, altura, aterramento, estrutura }: Torre = torre;
          const { codigo, marca, modelo } = dados_gerais;
          this.torreForm.patchValue({
            codigo,
            marca,
            modelo,
            status,            
            category,
            estrutura,
            aterramento,
            altura
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === torre.status)!;
          this.selectedEstruturaType = EstruturaTypeList.find((estruturaType) => estruturaType.value === torre.estrutura)!;
          this.selectedAterramentoType = AterramentoTypesList.find((aterramentoType) => aterramentoType.value === torre.aterramento)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    );

  }
  
  OnSubmit() {
    this.torre.dados_gerais.codigo = this.torreForm.get('codigo')?.value;
    this.torre.dados_gerais.modelo = this.torreForm.get('modelo')?.value;
    this.torre.dados_gerais.marca = this.torreForm.get('marca')?.value;
    this.torre.altura = this.torreForm.get('altura')?.value;

    this.torreService.update(this.torre).subscribe(
      {
        next: () => {
          alert("Torre editada com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.torreForm.reset();
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
    if(this.torre.id) {
      this.torreService.delete(this.torre.id).subscribe(
        {
          next: () => {
            alert("Torre deletada com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.torreForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.torreForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.torre.status = this.selectedEquipmentStatus.value;
  }

  OnEstruturaTypeSelected(value: string) {
    this.torreForm.patchValue({
      estrutura: value
    });

    this.selectedEstruturaType = this.estruturaTypes.find((estruturaType) => estruturaType.title === value)!;
    this.torre.estrutura = this.selectedEstruturaType.value;
  }

  OnAterramentoTypeSelected(value: string) {
    this.torreForm.patchValue({
      aterramento: value
    });

    this.selectedAterramentoType = this.aterramentoTypes.find((option) => option.title === value)!;
    this.torre.aterramento = this.selectedAterramentoType.value;
  }
}
