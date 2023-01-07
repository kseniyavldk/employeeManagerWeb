import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDown } from 'src/app/model/dropdown';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  users: User = {
    id: 0,
    name: '',
    lastname: '',
    patronymic: '',
    roleID: 0,
    isHeadman: false,
    userCode: '',
  };
  dropDownRoles: DropDown[] = [];

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.getDropDownRoles();
  }

  private getDropDownRoles(){
    this.userService.getRolesList().subscribe(data => {
      this.dropDownRoles = data;
    });
  }

  postUsersAdd() {
    this.userService.postUsersAdd(this.users).subscribe({
      next: (data) => {
        this.router.navigate(['/user']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
