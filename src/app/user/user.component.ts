import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User, VUser } from './user';
import { UserService } from './user.service';
declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

declare var window: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: User[] = [];
  vusers: VUser[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.getUsers();
    this.getVUsers();
  }
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  private getVUsers(){
    this.userService.getVUsersList().subscribe(data => {
      this.vusers = data;
    });
  }


    openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
   
    delete() {
      this.userService.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.vusers = this.vusers.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
  }
}

