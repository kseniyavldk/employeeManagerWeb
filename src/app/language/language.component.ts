import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
import { Language } from './language';

declare var window: any;
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages: Language[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getLanguages();
  }

  private getLanguages(){
    this.languageService.getLanguagesList().subscribe(data => {
      this.languages = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.languageService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.languages = this.languages.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
}

}
