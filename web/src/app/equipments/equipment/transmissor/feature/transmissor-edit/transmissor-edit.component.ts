import { Component } from '@angular/core';
import { EquipmentStatus, EquipmentsStatusList } from 'src/app/equipments/data-access/equipments-status';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { Antena } from '../../../antena/data-access/antena';
import { Receptor } from '../../../receptor/data-access/receptor';
import { DadosGerais } from 'src/app/equipments/data-access/dados-gerais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transmissor } from '../../data-access/transmissor';
import { TransmissorService } from '../../data-access/transmissor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transmissor-edit',
  templateUrl: './transmissor-edit.component.html',
  styleUrls: ['./transmissor-edit.component.css']
})
export class TransmissorEditComponent {
  cidade:string = "Cururupu";
  equipamento:string = "TRM0001";
  funcao:string = "Editar";
  equipment: string = "Transmissor";

  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[3]; //Irradiação
  
  equipmentStatus: EquipmentStatus[] = EquipmentsStatusList;
  selectedEquipmentStatus: EquipmentStatus = this.equipmentStatus[0]; //Funcionando
  statusOptions: string[] = this.equipmentStatus.map(({ title }) => title);

  antenas: Antena[] = [];
  selectedAntena?: Antena;
  antenasOptions: string[] = this.antenas.map(({ dados_gerais }) => dados_gerais.codigo);

  receptores: Receptor[] = [];
  selectedReceptor?: Receptor;
  receptoresOptions: string[] = this.receptores.map(({ dados_gerais }) => dados_gerais.codigo);

  dadosGerais: DadosGerais = {
    codigo: '',
    marca: '',
    modelo: ''
  }

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;

  transmissorForm!: FormGroup;

  transmissor: Transmissor = {
    dados_gerais: this.dadosGerais, 
    status: this.selectedEquipmentStatus.value, //FUNCIONANDO
    category: this.selectedEquipmentType.value, //IRRADIAÇÃO
    programmed_power: 0,
    canal_fisico: 0,
  }

  constructor(
    private formBuilder: FormBuilder,
    private transmissorService: TransmissorService,
    private route: ActivatedRoute,
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.antenas = data['antenas'];
      this.antenasOptions = this.antenas.map(({ dados_gerais }) => dados_gerais.codigo);
      this.antenasOptions.push("");
    });
 
    this.route.data.subscribe((data) => {
      this.receptores = data['receptores'];
      this.receptoresOptions = this.receptores.map(({ dados_gerais }) => dados_gerais.codigo);
      this.receptoresOptions.push("");
    });

    this.transmissorForm = this.formBuilder.group({
      codigo: [''],
      marca: [''],
      modelo: [''],
      status: [''], // ENUM
      programmed_power: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],      
      canal_fisico: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],      
      canal_virtual: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],      
      receptor_id: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],      
      antena_id: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],      
    }, {
      validators: this.atLeastOneHasValue(['codigo', 'marca', 'modelo', 'programmed_power', 'canal_fisico', 'canal_virtual'])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.transmissorService.find(parseInt(id!)).subscribe(
      {
        next: (transmissor) => {
          this.transmissor = transmissor;
          const { dados_gerais, status, category, programmed_power, canal_fisico, canal_virtual, receptor_id, antena_id }: Transmissor = transmissor;
          const { codigo, marca, modelo } = dados_gerais;
          this.transmissorForm.patchValue({
            codigo,
            marca,
            modelo,
            status,
            programmed_power, 
            canal_fisico, 
            canal_virtual, 
            receptor_id, 
            antena_id
          });
          this.selectedEquipmentStatus = EquipmentsStatusList.find((equipment) => equipment.value === transmissor.status)!;          
          this.selectedReceptor = this.receptores.find((receptor) => receptor.id === transmissor.receptor_id)!;
          this.selectedAntena = this.antenas.find((antena) => antena.id === transmissor.antena_id)!;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.transmissor.dados_gerais.codigo = this.transmissorForm.get('codigo')?.value;
    this.transmissor.dados_gerais.marca = this.transmissorForm.get('marca')?.value;
    this.transmissor.dados_gerais.modelo = this.transmissorForm.get('modelo')?.value;
    this.transmissor.programmed_power = this.transmissorForm.get('programmed_power')?.value;
    this.transmissor.canal_fisico = this.transmissorForm.get('canal_fisico')?.value;
    this.transmissor.canal_virtual = this.transmissorForm.get('canal_virtual')?.value;

    this.transmissorService.update(this.transmissor).subscribe(
      {
        next: () => {
          alert("Transmissor editado com sucesso!");
          this.router.navigate(['/equipments']);
        },
        error: (err) => {
          console.log(err);
          this.transmissorForm.reset();
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
    if(this.transmissor.id) {
      this.transmissorService.delete(this.transmissor.id).subscribe(
        {
          next: () => {
            alert("Transmissor deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.transmissorForm.reset();
          }
        }
      )
    }
  }

  OnEquipmentStatusSelected(value: string) {
    this.transmissorForm.patchValue({
      status:value
    });

    this.selectedEquipmentStatus = this.equipmentStatus.find((status) => status.title === value)!;
    this.transmissor.status = this.selectedEquipmentStatus.value;
  }

  OnReceptorSelected(value: string) {    
    this.selectedReceptor = this.receptores.find((receptor) => receptor.dados_gerais.codigo === value)!;
    this.transmissor.receptor_id = this.selectedReceptor.id;
  }

  OnAntenaSelected(value: string) {    
    this.selectedAntena = this.antenas.find((antena) => antena.dados_gerais.codigo === value)!;
    this.transmissor.antena_id = this.selectedAntena.id;
  }
}
