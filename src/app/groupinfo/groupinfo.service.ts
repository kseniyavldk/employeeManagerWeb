import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupInfo } from './groupinfo';
import { VGroupInfo } from './groupinfo';
@Injectable({
  providedIn: 'root'
})
export class GroupInfoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getGroupInfosList(): Observable<GroupInfo[]> {
      return this.http.get<GroupInfo[]>(`${this.apiServerUrl}/groupInfo/all`);
  }
  public getVGroupInfosList(): Observable<VGroupInfo[]> {
    return this.http.get<VGroupInfo[]>(`${this.apiServerUrl}/vgroupInfo/all`);
  }
  public postGroupInfosAdd(groupInfo: GroupInfo): Observable<GroupInfo> {
    return this.http.post<GroupInfo>(`${this.apiServerUrl}/groupInfo/add`, groupInfo);
  }
  public postVGroupInfosAdd(vgroupInfo: VGroupInfo): Observable<VGroupInfo> {
    return this.http.post<VGroupInfo>(`${this.apiServerUrl}/vgroupInfo/add`, vgroupInfo);
  }
  getById(id: number) {
    return this.http.get<GroupInfo>(`${this.apiServerUrl}/groupInfo/find/${id}`);
  }
  update(groupInfo: GroupInfo) {
    return this.http.put(`${this.apiServerUrl}/groupInfo/update`, groupInfo);
  }
  delete(id: number) {
    return this.http.delete<GroupInfo>(`${this.apiServerUrl}/groupInfo/delete/${id}`);
  }
}
