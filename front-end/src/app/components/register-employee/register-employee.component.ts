import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css'],
  providers: [EmployeeService]
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  @Input() currentEmployee = Employee;

  ngOnInit() {
  }
  addEmployee(form: NgForm){
    console.log(form.value);
    this.employeeService.postEmployee(form.value)
    .subscribe(res => {
      console.log(res);  
      this.resetForm(form) ;
    }) ;
  }

  resetForm(form: NgForm) {
    if (form) { 
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
