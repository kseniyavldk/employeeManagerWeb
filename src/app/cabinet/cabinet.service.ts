import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cabinet } from './cabinet';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCabinetsList(): Observable<Cabinet[]> {
      return this.http.get<Cabinet[]>(`${this.apiServerUrl}/cabinet/all`);
  }
  public postCabinetsAdd(cabinet: Cabinet): Observable<Cabinet> {
    return this.http.post<Cabinet>(`${this.apiServerUrl}/cabinet/add`, cabinet);
  }
  getById(id: number) {
    return this.http.get<Cabinet>(`${this.apiServerUrl}/cabinet/find/${id}`);
  }
  update(cabinet: Cabinet) {
    return this.http.put(`${this.apiServerUrl}/cabinet/update`, cabinet);
  }
  delete(id: number) {
    return this.http.delete<Cabinet>(`${this.apiServerUrl}/cabinet/delete/${id}`);
  }
}
