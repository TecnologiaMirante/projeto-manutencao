import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css']
})
export class StationCardComponent {

  @Input() stationName!: string;

}
