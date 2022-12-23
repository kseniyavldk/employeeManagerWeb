import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
import { Language } from '../employee';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages: Language[] | undefined;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getLanguages();
  }

  private getLanguages(){
    this.languageService.getLanguagesList().subscribe(data => {
      this.languages = data;
    });
  }

}
