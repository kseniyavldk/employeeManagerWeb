import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getLanguagesList(): Observable<Language[]> {
      return this.http.get<Language[]>(`${this.apiServerUrl}/language/all`);
  }
}
