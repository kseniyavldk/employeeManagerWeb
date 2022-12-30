import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { Language } from '../language';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {
  languages: Language = {
    id: 0,
    name: '',
    languageCode: '',
  }
  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
ngOnInit(): void {
  this.route.paramMap.subscribe((param) => {
    var id = Number(param.get('id'));
    this.getById(id);
  });
  }
  getById(id: number) {
    console.log(id);
    this.languageService.getById(id).subscribe((data) => {
      this.languages = data;
    });
  }

  update(): void {
    console.log(this.languages);
    console.log(`Editing employee...${this.languages}`);
    this.languageService.update(this.languages).subscribe({
      next: (data) => {
        this.router.navigate(['/language']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
