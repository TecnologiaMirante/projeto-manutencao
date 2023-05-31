import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receptor } from './receptor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptorService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/receptores";

  constructor(private http: HttpClient) { }

  create(receptor: Receptor): Observable<Receptor> {
    return this.http.post<Receptor>(this.API, receptor);
  }

  list(): Observable<Receptor[]> {
    return this.http.get<Receptor[]>(this.API);
  }

  update(receptor: Receptor): Observable<Receptor> {
    return this.http.put<Receptor>(`${this.API}/${receptor.id}`, receptor);
  }

  delete(id: number): Observable<Receptor> {
    return this.http.delete<Receptor>(`${this.API}/${id}`);
  }

  find(id: number): Observable<Receptor> {
    return this.http.get<Receptor>(`${this.API}/${id}`);
  }
}
