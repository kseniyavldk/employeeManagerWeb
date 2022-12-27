import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    roleId: 0,
    isHeadman: false,
    userCode: '',
  };

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    
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
