import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emp: Employee[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(res => {
      this.emp = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Employee
      }})
    });
  }

  removeEmployee = employee => this.employeeService.deleteEmployee(employee);

}
