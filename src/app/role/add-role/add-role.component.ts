import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit{
  roles: Role = {
    id: 0,
    name: '',
    roleCode: ''
  }
  constructor(private roleService: RoleService, private router: Router) {}

  ngOnInit(): void {
  }
  postRolesAdd() {
    this.roleService.postRolesAdd(this.roles).subscribe({
      next: (data) => {
        this.router.navigate(['/role']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
