import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from '../language';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit{
  languages: Language = {
    id: 0,
    name: '',
    languageCode: '',
  }
  
  constructor(private languageService: LanguageService, private router: Router) {}
  
  ngOnInit(): void {
    
  }
  postLanguagesAdd() {
    this.languageService.postLanguagesAdd(this.languages).subscribe({
      next: (data) => {
        this.router.navigate(['/language']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
