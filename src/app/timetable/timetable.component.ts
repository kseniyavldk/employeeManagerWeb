import { Component, OnInit } from '@angular/core';
import { TimeTable } from './timetable';
import { TimetableService } from './timetable.service';
declare var window: any;
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  timeTables: TimeTable[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private timeTableService: TimetableService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getTimeTables();
  }
  private getTimeTables(){
    this.timeTableService.getTimeTablesList().subscribe(data => {
      this.timeTables = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.timeTableService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.timeTables = this.timeTables.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
}
}
