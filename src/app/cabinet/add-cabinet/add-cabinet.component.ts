import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cabinet } from '../cabinet';
import { CabinetService } from '../cabinet.service';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-cabinet.component.html',
  styleUrls: ['./add-cabinet.component.css']
})
export class AddCabinetComponent implements OnInit{
  cabinets: Cabinet = {
    id: 0,
    number: 0,
    cabinetCode: '',
  }
  constructor(private cabinetService: CabinetService, private router: Router) {}
  
  ngOnInit(): void {
   
  }
  postCabinetsAdd() {
    this.cabinetService.postCabinetsAdd(this.cabinets).subscribe({
      next: (data) => {
        this.router.navigate(['/cabinet']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
