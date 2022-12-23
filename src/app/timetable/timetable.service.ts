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
}
