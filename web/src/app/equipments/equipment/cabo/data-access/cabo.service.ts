import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cabo } from './cabo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaboService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/cabos";
  
  constructor(private http: HttpClient) {}

  list(): Observable<Cabo[]> {
    return this.http.get<Cabo[]>(this.API);
  }

  find(id: number): Observable<Cabo> {
    return this.http.get<Cabo>(`${this.API}/${id}`);
  }

  create(cabo: Cabo): Observable<Cabo> {
    return this.http.post<Cabo>(this.API, cabo);
  }

  update(cabo: Cabo): Observable<Cabo> {
    return this.http.put<Cabo>(`${this.API}/${cabo.id}`, cabo);
  }

  delete(id: number): Observable<Cabo> {
    return this.http.delete<Cabo>(`${this.API}/${id}`);
  }
}
