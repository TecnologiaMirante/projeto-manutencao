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

  create(telemetria: Telemetria): Observable<Telemetria> {
    return this.http.post<Telemetria>(this.API, telemetria);
  }
}
