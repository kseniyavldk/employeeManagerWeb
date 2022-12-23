import { Component, OnInit } from '@angular/core';
import { GroupInfo } from './groupinfo';
import { GroupInfoService } from './groupinfo.service';

@Component({
  selector: 'app-groupinfo',
  templateUrl: './groupinfo.component.html',
  styleUrls: ['./groupinfo.component.css']
})
export class GroupinfoComponent implements OnInit {
  groupInfos: GroupInfo[] | undefined;

  constructor(private groupInfoService: GroupInfoService) { }

  ngOnInit(): void {
    this.getGroupInfos();
  }

  private getGroupInfos(){
    this.groupInfoService.getGroupInfosList().subscribe(data => {
      this.groupInfos = data;
    });
  }

}
