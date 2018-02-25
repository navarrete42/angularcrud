import { Injectable } from '@angular/core';

import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {

 selectedEmployee: Employee;
  constructor() { }

}
