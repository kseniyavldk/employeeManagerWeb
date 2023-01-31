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
  public postLanguagesAdd(language: Language): Observable<Language> {
    return this.http.post<Language>(`${this.apiServerUrl}/language/add`, language);
  }
  getById(id: number) {
    return this.http.get<Language>(`${this.apiServerUrl}/language/find/${id}`);
  }
  update(language: Language) {
    return this.http.put(`${this.apiServerUrl}/language/update`, language);
  }
  delete(id: number) {
    return this.http.delete<Language>(`${this.apiServerUrl}/language/delete/${id}`);
  }
}
