import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from '../../data-access/station';
import { StationsService } from '../../data-access/stations.service';
import { Disjuntor } from 'src/app/equipments/equipment/disjuntor/data-access/disjuntor';
import { DPS } from 'src/app/equipments/equipment/dps/data-access/dps';
import { Nobreak } from 'src/app/equipments/equipment/nobreak/data-access/nobreak';
import { ArCondicionado } from 'src/app/equipments/equipment/ar-condicionado/data-access/ar-condicionado';
import { Exaustor } from 'src/app/equipments/equipment/exaustor/data-access/exaustor';
import { Antena } from 'src/app/equipments/equipment/antena/data-access/antena';
import { CaboService } from 'src/app/equipments/equipment/cabo/data-access/cabo.service';
import { Cabo } from 'src/app/equipments/equipment/cabo/data-access/cabo';
import { Combinador } from 'src/app/equipments/equipment/combinador/data-access/combinador';
import { Parabolica } from 'src/app/equipments/equipment/parabolica/data-access/parabolica';
import { Receptor } from 'src/app/equipments/equipment/receptor/data-access/receptor';
import { Torre } from 'src/app/equipments/equipment/torre/data-access/torre';
import { Transmissor } from 'src/app/equipments/equipment/transmissor/data-access/transmissor';
import { Telemetria } from 'src/app/equipments/equipment/telemetria/data-access/telemetria';
import { Switch } from 'src/app/equipments/equipment/switch/data-access/switch';
import { listaEquipments } from '../../data-access/lista-equipments';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {
  estacao:string = "";
  action_path:string = "";
  nEquipamentos: number = 1;
  filter: string = '';

  station: Station = {
    nome: '',
    endereco: "Algum lugar",
    identificacao: '',    
  };

  equipaments: listaEquipments = {
    eletrica: {
      disjuntores: [
        {
          codigo: "codigo disjuntor 2",
          marca: "marca 2",
          modelo: "modelo 2"
        },
        {
          codigo: "DIS001",
          marca: "Marca Disjuntor 1",
          modelo: "Modelo Disjuntor 1"
        },
      ],
      dps: [
        {
          codigo: "sadaskdsada",
          marca: "asdsad",
          modelo: "asdsad"
        }
      ],
      nobreaks: []
    },
    irradiacao: {
      antenas: [
        {
          codigo: "aaaaa",
          marca: "aa",
          modelo: "aa"
        }
      ],
      parabolicas: [
        {
          codigo: "PAR001",
          marca: "Marca Parabólica 1",
          modelo: "Modelo Parabólica 1"
        },
        {
          codigo: "PAR002",
          marca: "MARCA 2",
          modelo: "MODELO 2"
        },
      ],
      receptores: [
        {
          codigo: "codigo 1",
          marca: "marca 1",
          modelo: "modelo 1"

        },
        {
          codigo: "REC002",
          marca: "MARCA 1",
          modelo: "MODELO 1"
        },
        {
          codigo: "receptor 3",
          marca: "marca 3",
          modelo: "modelo 3"
        }
      ],
      cabos: [],
      combinadores: [],
      torres: [],
      transmissores: []
    },
    telemetria: {
      telemetria: [
        {
          codigo: "cod tele",
          marca: "marca tele",
          modelo: "modelo tele"
        }
      ],
      switches: []
    },
    refrigeracao: {
      ar_condicionados: [],
      exaustor: []
    }
  };

  constructor(
    private stationService: StationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Salvando o id do parâmetro da URL
    this.route.params.subscribe((params) => {
      this.station.id = params['id'];
    });

    // Buscando no bd a estação pelo id
    this.stationService.find(this.station.id!).subscribe((station) => {
      this.station = station;
      this.estacao = this.station.nome;
      this.action_path = `Estações > ${this.estacao} > Equipamentos`;
    });
  }
}