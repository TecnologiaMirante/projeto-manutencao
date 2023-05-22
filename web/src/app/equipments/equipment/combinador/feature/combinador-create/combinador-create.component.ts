import { Component } from '@angular/core';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Combinador } from '../../data-access/combinador';
import { CombinadorService } from '../../data-access/combinador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combinador-create',
  templateUrl: './combinador-create.component.html',
  styleUrls: ['./combinador-create.component.css']
})
export class CombinadorCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "CMB0001";
  funcao:string = "Criar";
  equipment: string = "Combinador";

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

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  combinadorForm!: FormGroup;

  combinador: Combinador = {
    dados_gerais: this.dadosGerais,
    status: this.selectedEquipmentStatus.value, // FUNCIONANDO
    category: this.selectedEquipmentType.value // TELEMETRIA
  }

  constructor(
    private formBuilder: FormBuilder,
    private combinadorService: CombinadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.combinadorForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      status: [''],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
    })
  }

  OnSubmit() {
    this.combinador.dados_gerais.codigo = this.combinadorForm.get('codigo')?.value;
    this.combinador.dados_gerais.marca = this.combinadorForm.get('marca')?.value;
    this.combinador.dados_gerais.modelo = this.combinadorForm.get('modelo')?.value;    

    console.log(this.combinador)

    this.combinadorService.create(this.combinador).subscribe(
      {
        next: () => {
          alert("Combinador criado com sucesso!");
          this.combinadorForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.combinadorForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments']);
  }

  OnEquipmentStatusSelected(value: string) {
    this.combinadorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.combinador.status = this.selectedEquipmentStatus.value;
  }
}
