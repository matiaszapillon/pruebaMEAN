import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { Router, Navigation } from '@angular/router';
import { Project } from 'src/app/models/project';

declare var msg: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private router: Router,private employeeService: EmployeeService) { }

  public employeeToEdit: Employee;
  private  p: Project;

  ngOnInit() {
    this.getEmployee();
    this.check();
  }

  getEmployee(){
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[] ;
    },
    err => console.error('Observer got an error: ' + err));
  }

  onSelectionChange(currentEmployee: Employee){
    this.employeeToEdit = currentEmployee;
    console.log(currentEmployee);
  }
  check():void{
    console.log(this.router.getCurrentNavigation());
    console.log(window.history.state.proj);
    console.log(window.history.state.data);
    console.log(window.history.state.data.proj);
    console.log(window.history.state.data.proj.name);
 // console.log(this.router.getCurrentNavigation().extras.state); get currentNavigation returns null
  console.log(".proj");
  this.p =  window.history.state.data.proj;
 
  }

}
