import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cabinet } from '../cabinet';
import { CabinetService } from '../cabinet.service';

@Component({
  selector: 'app-edit-cabinet',
  templateUrl: './edit-cabinet.component.html',
  styleUrls: ['./edit-cabinet.component.css']
})
export class EditCabinetComponent implements OnInit {
cabinets: Cabinet = {
  id: 0,
  number: 0,
  cabinetCode: '',
}
constructor(
  private cabinetService: CabinetService,
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
  this.cabinetService.getById(id).subscribe((data) => {
    this.cabinets = data;
  });
}

update(): void {
  console.log(this.cabinets);
  this.cabinetService.update(this.cabinets).subscribe({
    next: (data) => {
      this.router.navigate(['/cabinet']);
    },
    error: (error) => {
      console.log(error);
    },
  });
}
}
