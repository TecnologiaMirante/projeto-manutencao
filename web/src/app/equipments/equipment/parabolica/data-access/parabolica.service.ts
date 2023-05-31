import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parabolica } from './parabolica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParabolicaService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/parabolicas";

  constructor(private http: HttpClient) { }

  create(parabolica: Parabolica): Observable<Parabolica> {
    return this.http.post<Parabolica>(this.API, parabolica);
  }

  list(): Observable<Parabolica[]> {
    return this.http.get<Parabolica[]>(this.API);
  }

  update(parabolica: Parabolica): Observable<Parabolica> {
    return this.http.put<Parabolica>(`${this.API}/${parabolica.id}`, parabolica);
  }

  delete(id: number): Observable<Parabolica> {
    return this.http.delete<Parabolica>(`${this.API}/${id}`);
  }

  find(id: number): Observable<Parabolica> {
    return this.http.get<Parabolica>(`${this.API}/${id}`);
  }
}
