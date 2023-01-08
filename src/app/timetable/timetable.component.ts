import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { TimeTable, VTimeTable } from './timetable';
import { TimetableService } from './timetable.service';
declare var window: any;
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  /* providers: [{ provide: LOCALE_ID, useValue: 'ru' }]  */
})
export class TimetableComponent implements OnInit {
  timeTables: TimeTable[] = [];
  vtimeTables: VTimeTable[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private timeTableService: TimetableService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getTimeTables();
    this.getVTimeTables();
  }
  private getTimeTables(){
    this.timeTableService.getTimeTablesList().subscribe(data => {
      this.timeTables = data;
    });
  }

  private getVTimeTables(){
    this.timeTableService.getVTimeTablesList().subscribe(data => {
      this.vtimeTables = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.timeTableService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.vtimeTables = this.vtimeTables.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
}
}
