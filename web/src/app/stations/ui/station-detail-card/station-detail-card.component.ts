import { Component, Input } from '@angular/core';
import { Station } from '../../data-access/station';

@Component({
  selector: 'app-station-detail-card',
  templateUrl: './station-detail-card.component.html',
  styleUrls: ['./station-detail-card.component.css']
})
export class StationDetailCardComponent {

  @Input() station!: Station;

}
