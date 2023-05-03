import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disjuntor } from './disjuntor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisjuntorService {

  private API = "http://192.168.6.20:5000/disjuntores";

  constructor(private http: HttpClient) { }

  create(disjuntor: Disjuntor): Observable<Disjuntor> {
    return this.http.post<Disjuntor>(this.API, disjuntor);
  }

  update(disjuntor: Disjuntor): Observable<Disjuntor> {
    const url = `${this.API}${disjuntor.id}`;
    return this.http.put<Disjuntor>(url, disjuntor);
  }

  list(): Observable<Disjuntor[]> {
    return this.http.get<Disjuntor[]>(this.API);
  }

  find(id: number): Observable<Disjuntor> {
    const url = `${this.API}/${id}`;
    return this.http.get<Disjuntor>(url);
  }

  delete(id: number): Observable<Disjuntor> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Disjuntor>(url);
  }
}
