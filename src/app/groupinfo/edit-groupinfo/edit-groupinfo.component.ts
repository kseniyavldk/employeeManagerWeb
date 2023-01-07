import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private groupInfoService: GroupInfoService,
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
    this.groupInfoService.getById(id).subscribe((data) => {
      this.groupInfos = data;
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
