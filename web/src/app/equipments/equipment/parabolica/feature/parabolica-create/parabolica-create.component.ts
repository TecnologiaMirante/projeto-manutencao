import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Parabolica } from '../../data-access/parabolica';
import { ParabolicaService } from '../../data-access/parabolica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parabolica-create',
  templateUrl: './parabolica-create.component.html',
  styleUrls: ['./parabolica-create.component.css']
})
export class ParabolicaCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "PAR0001";
  funcao:string = "Criar";
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.parabolicaForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      status: [''], //ENUM
      satelite: [''],
      diametro: ['', [ Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?") ]],
    })
  }

  OnSubmit() {
    this.parabolica.dados_gerais.codigo = this.parabolicaForm.get('codigo')?.value;
    this.parabolica.dados_gerais.modelo = this.parabolicaForm.get('modelo')?.value;
    this.parabolica.dados_gerais.marca = this.parabolicaForm.get('marca')?.value;
    this.parabolica.diametro = this.parabolicaForm.get('diametro')?.value;
    this.parabolica.satelite = this.parabolicaForm.get('satelite')?.value;

    this.parabolicaService.create(this.parabolica).subscribe(
      {
        next: () => {
          alert("Parabólica criada com sucesso!");
          this.parabolicaForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.parabolicaForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments']);
  }

  OnEquipmentStatusSelected(value: string) {
    this.parabolicaForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.parabolica.status = this.selectedEquipmentStatus.value;
  }
}
