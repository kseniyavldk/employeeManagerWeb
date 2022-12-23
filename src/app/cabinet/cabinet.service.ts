import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cabinet } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCabinetsList(): Observable<Cabinet[]> {
      return this.http.get<Cabinet[]>(`${this.apiServerUrl}/cabinet/all`);
  }
}
