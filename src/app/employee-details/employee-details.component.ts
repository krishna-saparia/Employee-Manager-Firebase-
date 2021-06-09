import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee[];
  emp: any;

  constructor(private employeeService: EmployeeService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(res => {
      this.emp = res;
    });
  }

}
