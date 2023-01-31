import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRolesList(): Observable<Role[]> {
      return this.http.get<Role[]>(`${this.apiServerUrl}/role/all`);
  }
  public postRolesAdd(role: Role): Observable<Role> {
    return this.http.post<Role>(`${this.apiServerUrl}/role/add`, role);
  }
  getById(id: number) {
    return this.http.get<Role>(`${this.apiServerUrl}/role/find/${id}`);
  }
  update(role: Role) {
    return this.http.put(`${this.apiServerUrl}/role/update`, role);
  }
  delete(id: number) {
    return this.http.delete<Role>(`${this.apiServerUrl}/role/delete/${id}`);
  }
}
