import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'


import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import {ToastrService} from 'ngx-toastr'
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private toastr : ToastrService) { }

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

  onSubmit(form : NgForm)
  {
    debugger;
    this.employeeService.postEmployee(form.value)
    .subscribe( data => {
       this.resetForm(form);
       this.toastr.success('New Record Added Successfully', 'Employee Register');
    });
  }

}
