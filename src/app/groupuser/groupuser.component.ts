import { Component, OnInit } from '@angular/core';
import { GroupuserService } from './groupuser.service';
import { GroupUser } from './groupuser';

@Component({
  selector: 'app-groupuser',
  templateUrl: './groupuser.component.html',
  styleUrls: ['./groupuser.component.css']
})
export class GroupuserComponent implements OnInit {
  groupusers: GroupUser[] | undefined

  constructor(private groupUserService: GroupuserService) { }

  ngOnInit(): void {
    this.getGroupUsers();
  }
  private getGroupUsers(){
    this.groupUserService.getGroupUsersList().subscribe(data => {
      this.groupusers = data;
    });
  }
}
