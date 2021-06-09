import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    eId: new FormControl('', Validators.required),
    contact_no: new FormControl('', [Validators.required]),
    dob: new FormControl('', Validators.required),
    emailID: new FormControl('', [Validators.required, Validators.email])
  });

  public empForm: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.empForm = this.formBuilder.group({
      employeeId: [''],
      first_name: [''],
      last_name: [''],
      emailId: [''],
      contact_no: [''],
      dob: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.createEmployee(this.empForm.value);
    this.router.navigate(['employees']);
  }
}
