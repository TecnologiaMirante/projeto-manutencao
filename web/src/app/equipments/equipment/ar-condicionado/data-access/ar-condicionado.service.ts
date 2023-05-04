import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArCondicionado } from './ar-condicionado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArCondicionadoService {

  private API = "http://192.168.6.20:5000/ativos";

  constructor(private http: HttpClient) { }

  create(arCondicionado: ArCondicionado): Observable<ArCondicionado> {
    return this.http.post<ArCondicionado>(this.API, arCondicionado);
  }

  update(arCondicionado: ArCondicionado): Observable<ArCondicionado> {
    const url = `${this.API}/${arCondicionado.id}`;
    return this.http.put<ArCondicionado>(url, arCondicionado);
  }

  list(): Observable<ArCondicionado[]> {
    return this.http.get<ArCondicionado[]>(this.API);
  }

  find(id: number): Observable<ArCondicionado> {
    const url = `${this.API}/${id}`;
    return this.http.get<ArCondicionado>(url);
  }

  delete(id: number): Observable<ArCondicionado> {
    const url = `${this.API}/${id}`;
    return this.http.delete<ArCondicionado>(url);
  }
}
