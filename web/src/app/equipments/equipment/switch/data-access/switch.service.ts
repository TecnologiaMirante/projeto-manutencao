import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Switch } from './switch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  private URL = "http://192.168.6.20:5000";
  private URL_test = "http://localhost:3000";
  private API = this.URL_test + "/switches";

  constructor(private http: HttpClient) {}

  create(switch_object: Switch): Observable<Switch> {
    return this.http.post<Switch>(this.API, switch_object);
  }

  update(switch_object: Switch): Observable<Switch> {
    const url = `${this.API}/${switch_object.id}`;
    return this.http.put<Switch>(url, switch_object);
  }
  
  find(id: number): Observable<Switch> {
    const url = `${this.API}/${id}`;
    return this.http.get<Switch>(url);
  }

  list(): Observable<Switch[]> {
    return this.http.get<Switch[]>(this.API);
  }
  
  delete(id: number): Observable<Switch> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Switch>(url);
  }
}
