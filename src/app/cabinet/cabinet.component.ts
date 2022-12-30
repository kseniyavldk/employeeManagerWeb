import { Component, OnInit } from '@angular/core';
import { Cabinet } from './cabinet';
import { CabinetService } from './cabinet.service';
declare var window: any;

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  cabinets: Cabinet[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private cabinetService: CabinetService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getCabinets()
  }

  private getCabinets(){
    this.cabinetService.getCabinetsList().subscribe(data => {
      this.cabinets = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.cabinetService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.cabinets = this.cabinets.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
}
}
