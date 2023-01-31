import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Employee[] | any;
  public employee: Employee | any;
  public editEmployee: Employee | any;
  public deleteEmployee: Employee | any;

constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
    this.getUdemyCourse();
  }

  
  public getUdemyCourse(): void {
    console.log('Fetching all courses...');
    this.employeeService.getUdemyCourse().subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.results);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public getEmployees(): void {
    console.log('Fetching all employees...');
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        console.log(response);
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log('Searching employees...');
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (
        employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public addEmployee(addForm: NgForm): void {
    const addFormId = document.getElementById('addFormId');
    if (addFormId) {
      addFormId.click();
    }

    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public updateEmployee(employee: Employee): void {
    console.log(`Editing employee...${employee}`);
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.employee = response;
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public onDeleteEmployee(employeeId: number): void {
    console.log(`Deleting employee by id: ${employeeId}`);
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(`Employee deleted`);
        this.employee = response;
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public onOpenModal(employee = null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }

    if (container != null) {
      container.appendChild(button);
    }

    button.click();
  }

  public onOpenList(employee = null, mode: string): void {
    const container = document.getElementById('container');
  }

}
