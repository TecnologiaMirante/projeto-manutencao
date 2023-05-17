import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Telemetria } from './telemetria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelemetriaService {

  private API = "http://192.168.6.20:5000/telemetrias";

  constructor(private http: HttpClient) {}

  create(telemetria: Telemetria): Observable<Telemetria> {
    return this.http.post<Telemetria>(this.API, telemetria);
  }
}
