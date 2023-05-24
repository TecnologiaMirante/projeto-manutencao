import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Antena } from './antena';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntenaService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/antenas";

  constructor(private http: HttpClient) { }

  create(antena: Antena):Observable<Antena> {
    return this.http.post<Antena>(this.API, antena);
  }

  list(): Observable<Antena[]> {
    return this.http.get<Antena[]>(this.API);
  }

  update(antena: Antena):Observable<Antena> {
    return this.http.put<Antena>(`${this.API}/${antena.id}`, antena);
  }

  delete(id: number): Observable<Antena> {
    return this.http.delete<Antena>(`${this.API}/${id}`);
  }

  find(id: number): Observable<Antena> {
    return this.http.get<Antena>(`${this.API}/${id}`);
  }
}
