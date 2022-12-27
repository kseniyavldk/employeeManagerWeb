import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  users: User = {
    id: 0,
    name: '',
    lastname: '',
    patronymic: '',
    roleId: 0,
    isHeadman: false,
    userCode: '',
  };

  constructor(
    private userService: UserService,
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
    this.userService.getById(id).subscribe((data) => {
      this.users = data;
    });
  }

  update(): void {
    console.log(this.users);
    console.log(`Editing employee...${this.users}`);
    this.userService.update(this.users).subscribe({
      next: (data) => {
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
