import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Nobreak } from './nobreak';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NobreakService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/nobreaks";

  constructor(private http: HttpClient) { }

  create(nobreak: Nobreak): Observable<Nobreak> {
    return this.http.post<Nobreak>(this.API, nobreak);
  }

  update(nobreak: Nobreak): Observable<Nobreak> {
    console.log(nobreak)
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
