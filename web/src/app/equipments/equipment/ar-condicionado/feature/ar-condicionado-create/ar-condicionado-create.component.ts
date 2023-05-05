import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArCondicionado } from '../../data-access/ar-condicionado';
import { ArCondicionadoService } from '../../data-access/ar-condicionado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ar-condicionado-create',
  templateUrl: './ar-condicionado-create.component.html',
  styleUrls: ['./ar-condicionado-create.component.css']
})
export class ArCondicionadoCreateComponent {
  cidade:string = "Cururupu";
  equipamento:string = "ARC0001";
  funcao:string = "Criar";
  equipment_type:string = "Ar condicionado"

  action_path:string = `Estações > ${this.cidade} > Equipamentos > ${this.funcao} ${this.equipment_type}`

  arCondicionadoForm!: FormGroup;

  arCondicionado: ArCondicionado = {
    tag: '',
    marca: '',
    modelo: '',
    potencia: 0,
    tensao: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private arCondicionadoService: ArCondicionadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arCondicionadoForm = this.formBuilder.group({
      tag: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      potencia: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]],
      tensao: ['', [Validators.required, Validators.pattern("-?\\d+(\\.\\d+)?")]]
    })
  }

  OnSubmit() {
    this.arCondicionado.tag = this.arCondicionadoForm.get('tag')?.value;
    this.arCondicionado.marca = this.arCondicionadoForm.get('marca')?.value;
    this.arCondicionado.modelo = this.arCondicionadoForm.get('modelo')?.value;
    this.arCondicionado.potencia = this.arCondicionadoForm.get('potencia')?.value;
    this.arCondicionado.tensao = this.arCondicionadoForm.get('tensao')?.value;
    
    this.arCondicionadoService.create(this.arCondicionado).subscribe(
      {
        next: () => {
          alert("Ar Condicionado criado com sucesso!");
          this.arCondicionadoForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.arCondicionadoForm.reset();
        }
      }
    )
  }

  cancel() {
    this.router.navigate(['/equipments'])
  }
}
