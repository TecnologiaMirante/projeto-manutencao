import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Nobreak } from './nobreak';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NobreakService {

  private API = "http://192.168.6.20:5000/nobreaks";

  constructor(private http: HttpClient) { }

  create(nobreak: Nobreak): Observable<Nobreak> {
    return this.http.post<Nobreak>(this.API, nobreak);
  }

  update(nobreak: Nobreak): Observable<Nobreak> {
    const url = `${this.API}/${nobreak.id}`;
    return this.http.put<Nobreak>(url, nobreak);
  }

  find(id: number): Observable<Nobreak> {
    const url = `${this.API}/${id}`;
    return this.http.get<Nobreak>(url);
  }

  list(): Observable<Nobreak[]> {
    return this.http.get<Nobreak[]>(this.API);
  }

  delete(id: number): Observable<Nobreak> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Nobreak>(url);
  }
}
