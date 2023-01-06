import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeTable } from '../timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-edit-time-table',
  templateUrl: './edit-time-table.component.html',
  styleUrls: ['./edit-time-table.component.css']
})
export class EditTimeTableComponent implements OnInit {
  
  timeTables: TimeTable = {
    id: 0,
    data: new Date(),
    groupId: 0,
    timeTableCode: '',
  };
  
  constructor(
    private timetableService: TimetableService,
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
    this.timetableService.getById(id).subscribe((data) => {
      this.timeTables = data;
    });
  }

  update(): void {
    console.log(this.timeTables);
    this.timetableService.update(this.timeTables).subscribe({
      next: (data) => {
        this.router.navigate(['/timetable']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
