import { Component, OnInit } from '@angular/core';
import { TimeTable } from './timetable';
import { TimetableService } from './timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  timeTables: TimeTable[] | undefined

  constructor(private timeTableService: TimetableService) { }

  ngOnInit(): void {
    this.getTimeTables();
  }
  private getTimeTables(){
    this.timeTableService.getTimeTablesList().subscribe(data => {
      this.timeTables = data;
    });
  }
}
