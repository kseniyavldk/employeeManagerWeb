import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/employee';
import { RoleService } from '../role.service';

declare var window: any;
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  roles: Role = {
    id: 0,
    name: '',
    roleCode: ''
  }

  constructor(private roleService: RoleService,  private route: ActivatedRoute,
    private router: Router) { }
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getById(id);
      });
    }
  
    getById(id: number) {
      console.log(id);
      this.roleService.getById(id).subscribe((data) => {
        this.roles = data;
      });
    }
  
    update(): void {
      console.log(this.roles);
      this.roleService.update(this.roles).subscribe({
        next: (data) => {
          this.router.navigate(['/role']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

}
