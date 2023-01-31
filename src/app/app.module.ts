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
import { AddTimeTableComponent } from './timetable/add-time-table/add-time-table.component';
import { EditTimeTableComponent } from './timetable/edit-time-table/edit-time-table.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { AddLanguageComponent } from './language/add-language/add-language.component';
import { EditLanguageComponent } from './language/edit-language/edit-language.component';
import { AddCabinetComponent } from './cabinet/add-cabinet/add-cabinet.component';
import { EditCabinetComponent } from './cabinet/edit-cabinet/edit-cabinet.component';
import { AddGroupinfoComponent } from './groupinfo/add-groupinfo/add-groupinfo.component';
import { EditGroupinfoComponent } from './groupinfo/edit-groupinfo/edit-groupinfo.component';



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
    EditComponent,
    AddTimeTableComponent,
    EditTimeTableComponent,
    AddRoleComponent,
    EditRoleComponent,
    AddLanguageComponent,
    EditLanguageComponent,
    AddCabinetComponent,
    EditCabinetComponent,
    AddGroupinfoComponent,
    EditGroupinfoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'cabinet', component: CabinetComponent},
      {path: 'cabinet/add', component: AddCabinetComponent},
      {path: 'cabinet/edit/:id', component: EditCabinetComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'groupinfo', component: GroupinfoComponent},
      {path: 'groupinfo/add', component: AddGroupinfoComponent},
      {path: 'groupinfo/edit/:id', component: EditGroupinfoComponent},
      {path: 'groupuser', component: GroupuserComponent},
      {path: 'language', component: LanguageComponent},
      {path: 'language/add', component: AddLanguageComponent},
      {path: 'language/edit/:id', component: EditLanguageComponent},
      {path: 'role', component: RoleComponent},
      {path: 'role/add', component: AddRoleComponent},
      {path: 'role/edit/:id', component: EditRoleComponent},
      {path: 'timetable', component: TimetableComponent},
      {path: 'timetable/add', component: AddTimeTableComponent},
      {path: 'timetable/edit/:id', component: EditTimeTableComponent},
      {path: 'user', component: UserComponent},
      {path: 'user/add', component: AddComponent},
      {path: 'user/edit/:id', component: EditComponent},
    ]),
  ],
  providers: [EmployeeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
