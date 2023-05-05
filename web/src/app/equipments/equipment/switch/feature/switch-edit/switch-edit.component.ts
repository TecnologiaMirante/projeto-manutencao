import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Switch } from '../../data-access/switch';
import { SwitchService } from '../../data-access/switch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-switch-edit',
  templateUrl: './switch-edit.component.html',
  styleUrls: ['./switch-edit.component.css']
})
export class SwitchEditComponent implements OnInit {
  cidade:string = "Cururupu";
  equipamento:string = "SWT0001";
  funcao:string = "Editar";
  equipment_type:string = "Switch"

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  switchForm!: FormGroup;

  switch: Switch = {
    tag: '',
    marca: '',
    modelo: '',
    qtdPortas: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private switchService: SwitchService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.switchForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      qtdPortas: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.switchService.find(parseInt(id!)).subscribe((switch_object) => {
      this.switch = switch_object;
    })

    this.switchService.find(parseInt(id!)).subscribe(
      {
        next: (switch_object) => {
          this.switchForm.patchValue(switch_object);
          this.switch = switch_object;
        },
        error: (err) => {
          alert(err.error.message);
          this.router.navigate(['/equipments']);
        }
      }
    )
  }

  OnSubmit() {
    this.switch.tag = this.switchForm.get('tag')?.value;
    this.switch.marca = this.switchForm.get('marca')?.value;
    this.switch.modelo = this.switchForm.get('modelo')?.value;
    this.switch.qtdPortas = this.switchForm.get('qtdPortas')?.value;
    
    this.switchService.update(this.switch).subscribe(
      {
        next: () => {
          alert("Switch editado com sucesso!");
          this.switchForm.reset();
        },
        error: (err) => {
          console.log(err.error.message);
          this.switchForm.reset();
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
    if(this.switch.id) {
      this.switchService.delete(this.switch.id).subscribe(
        {
          next: () => {
            alert("Switch deletado com sucesso!");
            this.router.navigate(['/equipments'])
          },
          error: (err) => {
            alert(err.error.message);
            this.switchForm.reset();
          }
        }
      )
    }
  }
}
