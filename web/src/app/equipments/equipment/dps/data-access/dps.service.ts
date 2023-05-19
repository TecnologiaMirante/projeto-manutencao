import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DPS } from './dps';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DpsService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/dps";

  constructor(private http: HttpClient) { }

  create(dps: DPS): Observable<DPS> {
    return this.http.post<DPS>(this.API, dps);
  }

  update(dps: DPS): Observable<DPS> {
    const url = `${this.API}/${dps.id}`;
    return this.http.put<DPS>(url, dps);
  }

  list(): Observable<DPS[]> {
    return this.http.get<DPS[]>(this.API);
  }

  find(id: number): Observable<DPS> {
    const url = `${this.API}/${id}`;
    return this.http.get<DPS>(url);
  }

  delete(id: number): Observable<DPS> {
    const url = `${this.API}/${id}`;
    return this.http.delete<DPS>(url);
  }

}
