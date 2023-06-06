import { Component, Input } from '@angular/core';
import { Station } from '../../data-access/station';

@Component({
  selector: 'app-stations1',
  templateUrl: './stations1.component.html',
  styleUrls: ['./stations1.component.css']
})
export class Stations1Component {

  @Input() stations: Station[] = [];

  constructor() {}  
}
