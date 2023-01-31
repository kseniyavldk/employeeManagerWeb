import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDown } from 'src/app/model/dropdown';
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
    data: new Date(),
    groupId: 0,
    cabinetId: 0,
    timeTableCode: '',
  };
  dropDownGroups: DropDown[] = [];
  dropDownCabinets: DropDown[] = [];
  constructor(private timetableService: TimetableService,  private router: Router) {}

  ngOnInit(): void {
    this.getDropDownGroups();
    this.getDropDownCabinets();
  }

  private getDropDownGroups(){
    this.timetableService.getGroupsList().subscribe(data => {
      this.dropDownGroups = data;
    });
  }

   private getDropDownCabinets(){
    this.timetableService.getCabinetsList().subscribe(data => {
      this.dropDownCabinets = data;
    });
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
