import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDown } from 'src/app/model/dropdown';
import { UserService } from 'src/app/user/user.service';
import { GroupInfo } from '../groupinfo';
import { GroupInfoService } from '../groupinfo.service';

@Component({
  selector: 'app-add-groupinfo',
  templateUrl: './add-groupinfo.component.html',
  styleUrls: ['./add-groupinfo.component.css']
})
export class AddGroupinfoComponent implements OnInit{
  groupInfos: GroupInfo = {
    id: 0,
    userId: 0,
    languageId: 0,
    GroupInfoCode: ''
  }
  dropDownTeachers: DropDown[] = [];

  constructor(private groupInfoService: GroupInfoService, private userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    this.getDropDownTeachers();
  }

  private getDropDownTeachers(){
    this.userService.getTeachersList().subscribe(data => {
      this.dropDownTeachers = data;
    });
  }

  postGroupInfosAdd() {
    this.groupInfoService.postGroupInfosAdd(this.groupInfos).subscribe({
      next: (data) => {
        this.router.navigate(['/groupinfo']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
