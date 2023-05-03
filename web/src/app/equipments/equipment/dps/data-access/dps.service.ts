import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DPS } from '../feature/data-access/dps';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DpsService {

  private API = "http://192.168.6.20:5000/dps";

  constructor(private http: HttpClient) { }

  create(dps: DPS): Observable<DPS> {
    return this.http.post<DPS>(this.API, dps);
  }
}
