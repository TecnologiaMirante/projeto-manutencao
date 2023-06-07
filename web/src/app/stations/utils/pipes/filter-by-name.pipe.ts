import { Pipe, PipeTransform } from '@angular/core';
import { Station } from '../../data-access/station';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(stations: Station[], descriptionQuery: string) {
    
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return stations.filter(station =>
        station.nome.toLowerCase().includes(descriptionQuery)
      );
    } else return stations;
  }

}
