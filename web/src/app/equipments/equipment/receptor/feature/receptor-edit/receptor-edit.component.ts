import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Parabolica } from '../../../parabolica/data-access/parabolica';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receptor } from '../../data-access/receptor';
import { ReceptorService } from '../../data-access/receptor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receptor-edit',
  templateUrl: './receptor-edit.component.html',
  styleUrls: ['./receptor-edit.component.css']
})
export class ReceptorEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "REC0001";
  funcao:string = "Editar";
  equipment: string = "Receptor";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  parabolicas: Parabolica[] = [];
  selectedParabolica?: Parabolica;
  parabolicasOptions: string[] = this.parabolicas.map(({ dados_gerais }) => dados_gerais.codigo);

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
    parabolica_id: this.selectedParabolica?.id,
    canal: 0,
    frequency: 0,
    symbol_rate: 0,    
  }

  constructor(
    private formBuilder: FormBuilder,
    private receptorService: ReceptorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.parabolicas = data['parabolicas'];
      this.parabolicasOptions = this.parabolicas.map(({ dados_gerais }) => dados_gerais.codigo);
      this.parabolicasOptions.push("");
    });

    this.receptorForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''],
      parabolica_id: [''],
      canal: ['',  Validators.pattern("-?\\d+(\\.\\d+)?")],      
      frequency: ['',  Validators.pattern("-?\\d+(\\.\\d+)?")],      
      symbol_rate: ['',  Validators.pattern("-?\\d+(\\.\\d+)?")],      
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'canal', 'frequency', 'symbol_rate'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.receptorService.find(parseInt(id!)).subscribe(
      {
        next: (receptor) => {
          this.receptor = receptor;
          const { dados_gerais, status, category, canal, frequency, symbol_rate, parabolica_id }: Receptor = receptor;
          const { codigo, marca, modelo } = dados_gerais;
          this.receptorForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            canal, 
            frequency, 
            symbol_rate,
            parabolica_id
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === receptor.status)!;          
          this.selectedParabolica = this.parabolicas.find((parabolica) => parabolica.id === receptor.parabolica_id)!;
          console.log(this.parabolicas)
          console.log(this.receptor.parabolica_id)
          console.log(this.selectedParabolica)
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.receptor.dados_gerais.codigo = this.receptorForm.get('codigo')?.value;
    this.receptor.dados_gerais.marca = this.receptorForm.get('marca')?.value;
    this.receptor.dados_gerais.modelo = this.receptorForm.get('modelo')?.value;
    this.receptor.canal = this.receptorForm.get('canal')?.value;
    this.receptor.frequency = this.receptorForm.get('frequency')?.value;
    this.receptor.symbol_rate = this.receptorForm.get('symbol_rate')?.value;
    
    this.receptorService.update(this.receptor).subscribe(
      {
        next: () => {
          alert("Receptor editado com sucesso!");
          this.router.navigate(['/equipments'])
        },
        error: (err) => {
          console.log(err.error.message);
          this.receptorForm.reset();
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
    if(this.receptor.id) {
      this.receptorService.delete(this.receptor.id).subscribe(
        {
          next: () => {
            alert("Receptor deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.receptorForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.receptorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.receptor.status = this.selectedEquipmentStatus.value;
  }

  OnParabolicaSelected(value: string) {    
    this.selectedParabolica = this.parabolicas.find((parabolica) => parabolica.dados_gerais.codigo === value)!;
    this.receptor.parabolica_id = this.selectedParabolica.id;
  }
}
