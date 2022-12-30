import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private groupInfoService: GroupInfoService, private router: Router) {}
ngOnInit(): void {
   
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
