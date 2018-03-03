import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {

  
    this.employee = new Employee(null, null, null, null);
    this.resetForm();
   
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.employeeService.selectedEmployee = {
        userId:null,
        id: null,
        title:'',
        body:''
      }
  }

}
