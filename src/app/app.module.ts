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
import {MatSidenavModule} from '@angular/material/sidenav';


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    MatSidenavModule,
  ],
  providers: [EmployeeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
