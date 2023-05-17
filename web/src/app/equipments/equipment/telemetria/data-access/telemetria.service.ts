import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Telemetria } from './telemetria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelemetriaService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/telemetrias";

  constructor(private http: HttpClient) {}
  
  list(): Observable<Telemetria[]> {
    return this.http.get<Telemetria[]>(this.API);
  }
  
  find(id: number): Observable<Telemetria> {
    return this.http.get<Telemetria>(`${this.API}/${id}`);
  }

  create(telemetria: Telemetria): Observable<Telemetria> {
    return this.http.post<Telemetria>(this.API, telemetria);
  }

  update(telemetria: Telemetria): Observable<Telemetria> {
    return this.http.put<Telemetria>(`${this.API}/${telemetria.id}`, telemetria);
  }

  delete(id: number): Observable<Telemetria> {
    return this.http.delete<Telemetria>(`${this.API}/${id}`);
  }
}
