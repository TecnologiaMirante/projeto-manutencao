import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from '../../data-access/station';
import { StationsService } from '../../data-access/stations.service';

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
