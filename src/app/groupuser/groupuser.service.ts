import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupUser } from './groupuser';

@Injectable({
  providedIn: 'root'
})
export class GroupuserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getGroupUsersList(): Observable<GroupUser[]> {
      return this.http.get<GroupUser[]>(`${this.apiServerUrl}/groupUser/all`);
  }
}
