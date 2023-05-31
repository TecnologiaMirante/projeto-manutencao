import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Receptor } from '../../data-access/receptor';
import { Parabolica } from '../../../parabolica/data-access/parabolica';
import { ReceptorService } from '../../data-access/receptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptor-create',
  templateUrl: './receptor-create.component.html',
  styleUrls: ['./receptor-create.component.css']
})
export class ReceptorCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "DPS0001";
  funcao:string = "Criar";
  equipment: string = "DPS";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  parabolica: Parabolica[] = [];

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  receptorForm!: FormGroup;

  receptor: Receptor = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    canal: 0,
    frequency: 0,
    symbol_rate: 0,    
  }

  constructor(
    private formBuilder: FormBuilder,
    private receptorService: ReceptorService,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.receptorForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      status: [''],
      canal: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],      
      frequency: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],      
      symbol_rate: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],      
    })
  }

  OnSubmit() {
    this.receptor.dados_gerais.codigo = this.receptorForm.get('codigo')?.value;
    this.receptor.dados_gerais.marca = this.receptorForm.get('marca')?.value;
    this.receptor.dados_gerais.modelo = this.receptorForm.get('modelo')?.value;
    this.receptor.canal = this.receptorForm.get('canal')?.value;
    this.receptor.frequency = this.receptorForm.get('frequency')?.value;
    this.receptor.symbol_rate = this.receptorForm.get('symbol_rate')?.value;

    this.receptorService.create(this.receptor).subscribe(
      {
        next: () => {
          alert("Receptor criado com sucesso!");
          this.receptorForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.receptorForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: string) {
    this.receptorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.receptor.status = this.selectedEquipmentStatus.value;
  }

}
