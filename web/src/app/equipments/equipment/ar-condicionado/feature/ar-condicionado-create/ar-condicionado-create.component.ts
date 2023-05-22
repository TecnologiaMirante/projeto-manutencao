import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArCondicionado } from '../../data-access/ar-condicionado';
import { ArCondicionadoService } from '../../data-access/ar-condicionado.service';
import { Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-ar-condicionado-create',
  templateUrl: './ar-condicionado-create.component.html',
  styleUrls: ['./ar-condicionado-create.component.css']
})
export class ArCondicionadoCreateComponent {

  cidade:string = "Cururupu";
  equipamento:string = "ARC0001";
  funcao:string = "Criar";
  equipment_type:string = "Ar condicionado"

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[0]; //REFRIGERACAO
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);
  
  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  arCondicionadoForm!: FormGroup;

  arCondicionado: ArCondicionado = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //REFRIGERACAO
    potencia: 0,
    tensao: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private arCondicionadoService: ArCondicionadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arCondicionadoForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      status: [''],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      potencia: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
      tensao: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]]
    })
  }

  OnSubmit() {
    this.arCondicionado.dados_gerais.codigo = this.arCondicionadoForm.get('codigo')?.value;
    this.arCondicionado.dados_gerais.marca = this.arCondicionadoForm.get('marca')?.value;
    this.arCondicionado.dados_gerais.modelo = this.arCondicionadoForm.get('modelo')?.value;
    this.arCondicionado.potencia = this.arCondicionadoForm.get('potencia')?.value;
    this.arCondicionado.tensao = this.arCondicionadoForm.get('tensao')?.value;
    
    this.arCondicionadoService.create(this.arCondicionado).subscribe(
      {
        next: () => {
          alert("Ar Condicionado criado com sucesso!");
          this.arCondicionadoForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.arCondicionadoForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: string) {
    this.arCondicionadoForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.arCondicionado.status = this.selectedEquipmentStatus.value;
  }
}
