import { Component, OnInit } from '@angular/core';
import { Cabinet } from './cabinet';
import { CabinetService } from './cabinet.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  cabinets: Cabinet[] | undefined;

  constructor(private cabinetService: CabinetService) { }

  ngOnInit(): void {
    this.getCabinets()
  }

  private getCabinets(){
    this.cabinetService.getCabinetsList().subscribe(data => {
      this.cabinets = data;
    });
  }

}
