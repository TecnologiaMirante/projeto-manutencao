import { Component } from '@angular/core';
import { Telemetria } from '../../data-access/telemetria';
import { EquipmentType, EquipmentsTypeList } from 'src/app/equipments/data-access/equipments-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TelemetriaService } from '../../data-access/telemetria.service';

@Component({
  selector: 'app-telemetria-create',
  templateUrl: './telemetria-create.component.html',
  styleUrls: ['./telemetria-create.component.css']
})
export class TelemetriaCreateComponent {

  cidade:string = "Cururupu";
  equipamento:string = "TLM0001";
  funcao:string = "Criar";
  equipment: string = "Telemetria";
  equipmentTypes: EquipmentType[] = EquipmentsTypeList;
  selectedEquipmentType: EquipmentType = this.equipmentTypes[2]; //Telemetria

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment}`;
  telemetriaForm!: FormGroup;

  telemetria: Telemetria = {
    tag: '',
    marca: '',
    modelo: '',
    category: this.selectedEquipmentType.value, //TELEMETRIA
  }

  constructor(
    private formBuilder: FormBuilder,
    private telemetriaService: TelemetriaService,
    private router: Router
  ) {}

  form!: FormGroup;


  ngOnInit(): void {
    this.telemetriaForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      category: [''] 
    })
  }

  OnSubmit() {
    this.telemetria.tag = this.telemetriaForm.get('tag')?.value;
    this.telemetria.marca = this.telemetriaForm.get('marca')?.value;
    this.telemetria.modelo = this.telemetriaForm.get('modelo')?.value;

    console.log(this.telemetriaForm.value)

    this.telemetriaService.create(this.telemetria).subscribe(
      {
        next: () => {
          alert("Telemetria criada com sucesso!");
          this.telemetriaForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.telemetriaForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments']);
  }

  OnEquipmentTypeSelected(value: EquipmentType) {
    this.telemetriaForm.patchValue({
      category:value.value
    })
  }
}
