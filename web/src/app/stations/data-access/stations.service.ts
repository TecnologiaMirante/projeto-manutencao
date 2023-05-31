import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from './station';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/stations";

  constructor(private http: HttpClient) { }

  create(station: Station): Observable<Station> {
    return this.http.post<Station>(this.API, station);
  }

  list(): Observable<Station[]> {
    return this.http.get<Station[]>(this.API);
  }

  update(station: Station): Observable<Station> {
    return this.http.put<Station>(`${this.API}/${station.id}`, station);
  }

  delete(id: number): Observable<Station> {
    return this.http.delete<Station>(`${this.API}/${id}`);
  }

  find(id: number): Observable<Station> {
    return this.http.get<Station>(`${this.API}/${id}`);
  }
}
