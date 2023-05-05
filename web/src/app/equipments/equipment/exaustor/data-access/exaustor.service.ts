import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exaustor } from './exaustor';

@Injectable({
  providedIn: 'root'
})
export class ExaustorService {

  private API = "http://192.168.6.20:5000/exaustores";

  constructor(private http: HttpClient) { }

  create(exaustor: Exaustor): Observable<Exaustor> {
    return this.http.post<Exaustor>(this.API, exaustor);
  }

  update(exaustor: Exaustor): Observable<Exaustor> {
    const url = `${this.API}/${exaustor.id}`;
    return this.http.put<Exaustor>(url, exaustor);
  }

  list(): Observable<Exaustor[]> {
    return this.http.get<Exaustor[]>(this.API);
  }

  find(id: number): Observable<Exaustor> {
    const url = `${this.API}/${id}`;
    return this.http.get<Exaustor>(url);
  }

  delete(id: number): Observable<Exaustor> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Exaustor>(url);
  }
}
