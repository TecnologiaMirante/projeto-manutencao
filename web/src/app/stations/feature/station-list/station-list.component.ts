import { Component } from '@angular/core';
import { Station } from '../../data-access/station';
import { StationsService } from '../../data-access/stations.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent {
  stations: Station[] = [];
  nStations: number = this.stations.length;
  filter: string = '';

  constructor(
    private stationService: StationsService,
  ) {}

  ngOnInit(): void {
    this.stationService.list().subscribe(
      {
        next: (stations) => {
          this.stations = stations;
          this.nStations = this.stations.length;
        },
        error(err) {
          alert(err.error.message);
        },
      }
    );
  }
}
