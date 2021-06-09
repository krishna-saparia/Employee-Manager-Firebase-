import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emp: Employee[];
  query = '';
  searchValue: string;
  constructor(private employeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(res => {
      this.emp = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Employee
      }})
    });
  }
  removeEmployee(id: number){
    this.employeeService.deleteEmployee(id);
  }
  // removeEmployee = employee => this.employeeService.deleteEmployee(employee);
  search(): void {
    if (this.query.length === 0) {
      return;
    }
    this.router.navigate(['search', this.query]);
  }
}
