import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Torre } from './torre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/torres";

  constructor(private http:HttpClient) { }

  create(torre: Torre): Observable<Torre> {
    return this.http.post<Torre>(this.API, torre);
  }

  update(torre: Torre): Observable<Torre> {
    const url = `${this.API}/${torre.id}`;
    return this.http.put<Torre>(url, torre);
  }

  list(): Observable<Torre[]> {
    return this.http.get<Torre[]>(this.API);
  }

  find(id: number): Observable<Torre> {
    const url = `${this.API}/${id}`;
    return this.http.get<Torre>(url);
  }

  delete(id: number): Observable<Torre> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Torre>(url);
  }
}
