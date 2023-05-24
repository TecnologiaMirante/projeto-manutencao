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

  constructor(private http: HttpClient) { }

  create(torre: Torre): Observable<Torre> {
    return this.http.post<Torre>(this.API, torre);
  }

  list(): Observable<Torre[]> {
    return this.http.get<Torre[]>(this.API);
  }

  update(torre: Torre): Observable<Torre> {
    return this.http.put<Torre>(`${this.API}/${torre.id}`, torre);
  }

  delete(id: number): Observable<Torre> {
    return this.http.delete<Torre>(`${this.API}/${id}`);
  }

  find(id: number): Observable<Torre> {
    return this.http.get<Torre>(`${this.API}/${id}`);
  }
}
