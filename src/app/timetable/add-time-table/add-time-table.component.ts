import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeTable } from '../timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-add-time-table',
  templateUrl: './add-time-table.component.html',
  styleUrls: ['./add-time-table.component.css']
})
export class AddTimeTableComponent implements OnInit{
  timeTables: TimeTable = {
    id: 0,
    data: 0,
    groupId: 0,
    timeTableCode: '',
  };

  constructor(private timetableService: TimetableService, private router: Router) {}

  ngOnInit(): void {
    
  }
  postTimeTablesAdd() {
    this.timetableService.postTimeTablesAdd(this.timeTables).subscribe({
      next: (data) => {
        this.router.navigate(['/timetable']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
