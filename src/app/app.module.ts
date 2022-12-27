import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./AppComponent";
import { EmployeeService } from './employee.service';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LanguageComponent } from './language/language.component';
import { EmployeeComponent } from './employee/employee.component';
import { GroupinfoComponent } from './groupinfo/groupinfo.component';
import { GroupuserComponent } from './groupuser/groupuser.component';
import { UserService } from './user/user.service';
import { RouterModule } from '@angular/router';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    UserComponent,
    CabinetComponent,
    TimetableComponent,
    LanguageComponent,
    EmployeeComponent,
    GroupinfoComponent,
    GroupuserComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'cabinet', component: CabinetComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'groupinfo', component: GroupinfoComponent},
      {path: 'groupuser', component: GroupuserComponent},
      {path: 'language', component: LanguageComponent},
      {path: 'role', component: RoleComponent},
      {path: 'timetable', component: TimetableComponent},
      {path: 'user', component: UserComponent},
      {path: 'user/add', component: AddComponent},
      {path: 'user/edit/:id', component: EditComponent}
    ]),
  ],
  providers: [EmployeeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
