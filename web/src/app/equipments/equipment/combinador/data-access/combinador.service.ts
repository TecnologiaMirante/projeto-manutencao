import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combinador } from './combinador';

@Injectable({
  providedIn: 'root'
})
export class CombinadorService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/combinadores";

  constructor(private http: HttpClient) {}

  list(): Observable<Combinador[]> {
    return this.http.get<Combinador[]>(this.API);
  }

  find(id: number): Observable<Combinador> {
    return this.http.get<Combinador>(`${this.API}/${id}`);
  }

  create(combinador: Combinador): Observable<Combinador> {
    return this.http.post<Combinador>(this.API, combinador);
  }

  update(combinador: Combinador): Observable<Combinador> {
    return this.http.put<Combinador>(`${this.API}/${combinador.id}`, combinador);
  }

  delete(id: number): Observable<Combinador> {
    return this.http.delete<Combinador>(`${this.API}/${id}`);
  }

}
