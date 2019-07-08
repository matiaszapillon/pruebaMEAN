import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var msg: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  public employeeToEdit: Employee;
  
  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[] ;
      console.log(res);
    },
    err => console.error('Observer got an error: ' + err));
  }

  onSelectionChange(currentEmployee: Employee){
    this.employeeToEdit = currentEmployee;
    console.log(currentEmployee);
  }


}
