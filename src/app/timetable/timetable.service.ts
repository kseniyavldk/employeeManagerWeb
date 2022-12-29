import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeTable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTimeTablesList(): Observable<TimeTable[]> {
      return this.http.get<TimeTable[]>(`${this.apiServerUrl}/timeTable/all`);
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
