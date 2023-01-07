import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDown } from 'src/app/model/dropdown';
import { UserService } from 'src/app/user/user.service';
import { GroupInfo } from '../groupinfo';
import { GroupInfoService } from '../groupinfo.service';

@Component({
  selector: 'app-edit-groupinfo',
  templateUrl: './edit-groupinfo.component.html',
  styleUrls: ['./edit-groupinfo.component.css']
})
export class EditGroupinfoComponent implements OnInit{
  groupInfos: GroupInfo = {
    id: 0,
    userId: 0,
    languageId: 0,
    GroupInfoCode: ''
  }
  dropDownTeachers: DropDown[] = [];
  dropDownLanguages: DropDown[] = [];

  constructor(
    private groupInfoService: GroupInfoService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
    this.getDropDownTeachers();
    this.getDropDownLanguages();
  }

  getById(id: number) {
    console.log(id);
    this.groupInfoService.getById(id).subscribe((data) => {
      this.groupInfos = data;
    });
  }

  private getDropDownTeachers(){
    this.userService.getTeachersList().subscribe(data => {
      this.dropDownTeachers = data;
    });
  }

  private getDropDownLanguages(){
    this.userService.getLanguagesList().subscribe(data => {
      this.dropDownLanguages = data;
    });
  }

  update(): void {
    this.groupInfoService.update(this.groupInfos).subscribe({
      next: (data) => {
        this.router.navigate(['/groupinfo']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
