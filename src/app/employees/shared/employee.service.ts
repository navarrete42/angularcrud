import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request ,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';

@Injectable()
export class EmployeeService 
{

 selectedEmployee: Employee;
 
  constructor(private http : Http) {}

  postEmployee(emp : Employee)
  {
     var body = JSON.stringify(emp);
     var headerOptions= new Headers({'Content-Type':'application/json'});
     var requestOptions= new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
     return this.http.post('https://jsonplaceholder.typicode.com/posts',body,requestOptions).map(x => x.json());
  }
  

}
