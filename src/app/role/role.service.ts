import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRolesList(): Observable<Role[]> {
      return this.http.get<Role[]>(`${this.apiServerUrl}/role/all`);
  }
}
