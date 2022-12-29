import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { RoleService } from './role.service';

declare var window: any;
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.getRoles();
  }
  private getRoles(){
    this.roleService.getRolesList().subscribe(data => {
      this.roles = data;
    });
  }
  openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
   
    delete() {
      this.roleService.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.roles = this.roles.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
  }
}
