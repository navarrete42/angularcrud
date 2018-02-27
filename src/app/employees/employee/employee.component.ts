import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee(null, null, null, null);
  }

  resetForm(form: NgForm) {

  }

}
