import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropDown} from '../model/dropdown';
import { User, VUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}
  public getGroupsList(): Observable<DropDown[]> {
    return this.http.get<DropDown[]>(`${this.apiServerUrl}/vgroupInfo/allKeyValue`);
  }
  public getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }
  public getVUsersList(): Observable<VUser[]> {
    return this.http.get<VUser[]>(`${this.apiServerUrl}/vuser/all`);
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
  public getTeachersList(): Observable<DropDown[]> {
    return this.http.get<DropDown[]>(`${this.apiServerUrl}/user/allTeachers`);
  }
  public getRolesList(): Observable<DropDown[]> {
    return this.http.get<DropDown[]>(`${this.apiServerUrl}/role/allKeyValue`);
  }
  public getLanguagesList(): Observable<DropDown[]> {
    return this.http.get<DropDown[]>(`${this.apiServerUrl}/language/allKeyValue`);
  }
}
