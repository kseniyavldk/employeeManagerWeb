import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AddService } from './add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
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
  }
 
  constructor(private addService: AddService, private router:Router) { }
  ngOnInit(): void {
    this.postUsersAdd();
  }
  postUsersAdd(){
    console.log('hi')
    this.addService.postUsersAdd(this.users).subscribe({
      next:(data) => {
        this.router.navigate(["/user/add"])
      },
      error:(err) => {
        console.log(err);
      }
    });
    
  }
}
