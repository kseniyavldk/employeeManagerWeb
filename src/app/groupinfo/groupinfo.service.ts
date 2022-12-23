import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupInfo } from './groupinfo';

@Injectable({
  providedIn: 'root'
})
export class GroupInfoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getGroupInfosList(): Observable<GroupInfo[]> {
      return this.http.get<GroupInfo[]>(`${this.apiServerUrl}/groupInfo/all`);
  }
}
