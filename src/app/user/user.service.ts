import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }
  public postUsersAdd(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }
  getById(id: number) {
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${id}`);
  }
  update(user: User) {
    return this.http.put(`${this.apiServerUrl}/user/update`, user);
  }
  delete(id: number) {
    return this.http.delete<User>(`${this.apiServerUrl}/user/delete/${id}`);
  }
}
