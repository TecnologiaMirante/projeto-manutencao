import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exaustor } from '../../data-access/exaustor';
import { ExaustorService } from '../../data-access/exaustor.service';
import { Router } from '@angular/router';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';

@Component({
  selector: 'app-exaustor-create',
  templateUrl: './exaustor-create.component.html',
  styleUrls: ['./exaustor-create.component.css']
})
export class ExaustorCreateComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "EXT0001";
  funcao:string = "Criar";
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
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //REFRIGERACAO
  }

  constructor(
    private formBuilder: FormBuilder,
    private exaustorService: ExaustorService,
    private router: Router    
  ) {}

  
  ngOnInit(): void {
    this.exaustorForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      status: [''],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
    })
  }

  OnSubmit() {
    this.exaustor.dados_gerais.codigo = this.exaustorForm.get('codigo')?.value;
    this.exaustor.dados_gerais.marca = this.exaustorForm.get('marca')?.value;
    this.exaustor.dados_gerais.modelo = this.exaustorForm.get('modelo')?.value;
    
    this.exaustorService.create(this.exaustor).subscribe(
      {
        next: () => {
          alert("Exaustor criado com sucesso!");
          this.exaustorForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.exaustorForm.reset();
        }
      }
    )
  }
  
  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: string) {
    this.exaustorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.exaustor.status = this.selectedEquipmentStatus.value;
  }
}
