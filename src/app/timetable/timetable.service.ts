import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropDown } from '../model/dropdown';
import { TimeTable, VTimeTable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTimeTablesList(): Observable<TimeTable[]> {
      return this.http.get<TimeTable[]>(`${this.apiServerUrl}/timeTable/all`);
      
      /* return this.http.get<TimeTable[]>(`${this.apiServerUrl}/timeTable/all`).pipe(
        map(res => ({
          ...res,
          data: new Date(res.data)
        }),
      )); */
  }
  public getGroupsList(): Observable<DropDown[]> {
    return this.http.get<DropDown[]>(`${this.apiServerUrl}/vgroupInfo/allKeyValue`);
  }
  public getCabinetsList(): Observable<DropDown[]> {
    return this.http.get<DropDown[]>(`${this.apiServerUrl}/cabinet/allKeyValue`);
  }
   public getVTimeTablesList(): Observable<VTimeTable[]> {
    return this.http.get<VTimeTable[]>(`${this.apiServerUrl}/vtimetable/all`);
  }
  public postTimeTablesAdd(timeTable: TimeTable): Observable<TimeTable> {
    return this.http.post<TimeTable>(`${this.apiServerUrl}/timeTable/add`, timeTable);
}
  getById(id: number) {
    return this.http.get<TimeTable>(`${this.apiServerUrl}/timeTable/find/${id}`);
}
  update(timeTable: TimeTable){
    return this.http.put(`${this.apiServerUrl}/timeTable/update`, timeTable);
  }
  delete(id: number){
    return this.http.delete<TimeTable>(`${this.apiServerUrl}/timeTable/delete/${id}`);
  }
}
