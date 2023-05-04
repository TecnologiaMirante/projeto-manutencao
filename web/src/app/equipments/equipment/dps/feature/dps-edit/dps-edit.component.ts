import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DPS } from '../../data-access/dps';
import { DpsService } from '../../data-access/dps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dps-edit',
  templateUrl: './dps-edit.component.html',
  styleUrls: ['./dps-edit.component.css']
})
export class DpsEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "DPS0001";
  funcao:string = "Editar";
  equipment_type:string = "DPS"

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  dpsForm!: FormGroup;

  dps: DPS = {
    tag: 'Text',
    marca: 'marca',
    modelo: 'Modelo',
    corrente_maxima: 0,
    classe: 'Classe'
  }

  constructor(
    private formBuilder: FormBuilder,
    private dpsService: DpsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.dpsForm = this.formBuilder.group({
      tag: [''],
      marca: [''],
      modelo: [''],
      // futuramente verificar se o modelo ja existe no sistema
      // criar um async validator
      corrente_maxima: ['', Validators.pattern("-?\\d+(\\.\\d+)?")],
      classe: ['']
    }, {
      validators: this.atLeastOneHasValue(['tag', 'marca', 'modelo', 'corrente_maxima', 'classe'])
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.dpsService.find(parseInt(id!)).subscribe((dps) => {
      this.dps = dps;
    })

    this.dpsService.find(parseInt(id!)).subscribe(
      {
        next: (dps) => {
          this.dpsForm.patchValue(dps);
          this.dps = dps;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.dps.tag = this.dpsForm.get('tag')?.value;
    this.dps.marca = this.dpsForm.get('marca')?.value;
    this.dps.modelo = this.dpsForm.get('modelo')?.value;
    this.dps.corrente_maxima = this.dpsForm.get('corrente_maxima')?.value;
    this.dps.classe = this.dpsForm.get('classe')?.value;
    
    this.dpsService.update(this.dps).subscribe(
      {
        next: () => {
          alert("DPS editado com sucesso!");
          this.dpsForm.reset();
        },
        error: (err) => {
          console.log(err.error.message);
          this.dpsForm.reset();
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
    if(this.dps.id) {
      this.dpsService.delete(this.dps.id).subscribe(
        {
          next: () => {
            alert("DPS deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.dpsForm.reset();
          }
        }
      )

    }
  }
}
