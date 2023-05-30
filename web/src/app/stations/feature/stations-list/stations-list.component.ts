import { Component } from '@angular/core';
import { Station } from '../../data-access/station';
import { StationsService } from '../../data-access/stations.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent {

  stations: Station[] = [];
  nStations: number = this.stations.length;

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
