import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Disjuntor } from '../../data-access/disjuntor';
import { Router } from '@angular/router';
import { DisjuntorService } from '../../data-access/disjuntor.service';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';

@Component({
  selector: 'app-disjuntor-create',
  templateUrl: './disjuntor-create.component.html',
  styleUrls: ['./disjuntor-create.component.css']
})
export class DisjuntorCreateComponent implements OnInit  {
  cidade:string = "Cururupu";
  equipamento:string = "DJN0001";
  funcao:string = "Criar";
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
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //ELÉTRICA
    corrente_maxima: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private disjuntorService: DisjuntorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.disjuntorForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      status: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      corrente_maxima: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
    })
  }

  OnSubmit() {
    this.disjuntor.dados_gerais.codigo = this.disjuntorForm.get('codigo')?.value;
    this.disjuntor.dados_gerais.marca = this.disjuntorForm.get('marca')?.value;
    this.disjuntor.dados_gerais.modelo = this.disjuntorForm.get('modelo')?.value;
    this.disjuntor.corrente_maxima = this.disjuntorForm.get('corrente_maxima')?.value;
    
    this.disjuntorService.create(this.disjuntor).subscribe(
      {
        next: () => {
          alert("Disjuntor criado com sucesso!");
          this.disjuntorForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.disjuntorForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }

  OnEquipmentStatusSelected(value: string) {
    this.disjuntorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.disjuntor.status = this.selectedEquipmentStatus.value;
  }
}
