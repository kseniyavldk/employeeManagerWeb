import { Component, OnInit } from '@angular/core';
import { GroupInfo } from './groupinfo';
import { VGroupInfo } from './groupinfo';
import { GroupInfoService } from './groupinfo.service';
declare var window: any;
@Component({
  selector: 'app-groupinfo',
  templateUrl: './groupinfo.component.html',
  styleUrls: ['./groupinfo.component.css']
})
export class GroupinfoComponent implements OnInit {
  groupInfos: GroupInfo[] = [];
  vgroupInfos: VGroupInfo[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private groupInfoService: GroupInfoService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getGroupInfos();
    this.getVGroupInfos();
  }

  private getGroupInfos(){
    this.groupInfoService.getGroupInfosList().subscribe(data => {
      this.groupInfos = data;
    });
  }

  private getVGroupInfos(){
    this.groupInfoService.getVGroupInfosList().subscribe(data => {
      this.vgroupInfos = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.groupInfoService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.vgroupInfos = this.vgroupInfos.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
}
}
