import { Component } from '@angular/core';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent {

  nStations: number = 45;
  station_name: string[] = [
    'Cururupu',
    'Bacabal'
  ];

}
