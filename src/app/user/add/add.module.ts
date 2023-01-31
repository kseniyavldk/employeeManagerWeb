import { Routes } from '@angular/router';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
 
const routes: Routes = [
  {
    path: 'user/all',
    component: AddComponent,
  }
];

@NgModule({
    imports: [
      FormsModule
    ]
  })
  export class AddModule { }