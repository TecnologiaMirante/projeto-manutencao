import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transmissor } from './transmissor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransmissorService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/transmissores";

  constructor(private http: HttpClient) { }

  create(transmissor: Transmissor): Observable<Transmissor> {
    return this.http.post<Transmissor>(this.API, transmissor);
  }

  list(): Observable<Transmissor[]> {
    return this.http.get<Transmissor[]>(this.API);
  }

  update(transmissor: Transmissor): Observable<Transmissor> {
    return this.http.put<Transmissor>(`${this.API}/${transmissor.id}`, transmissor);
  }

  delete(id: number): Observable<Transmissor> {
    return this.http.delete<Transmissor>(`${this.API}/${id}`);
  }

  find(id: number): Observable<Transmissor> {
    return this.http.get<Transmissor>(`${this.API}/${id}`);
  }
}
