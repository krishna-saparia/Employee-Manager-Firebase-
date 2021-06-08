import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee.model'
import {Router} from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
      first_name: [''],
      last_name: [''],
      eId: [''],
      contact_no : [''],
      dob : [''],
      emailID: [''],
    });
  }

  ngOnInit(): void {
  }

  // saveEmployee() {
  //   this.employeeService.createEmployee(this.employee).subscribe(data => {
  //       console.log(data);
  //     },
  //     error => console.log(error));
  // }

  onSubmit() {
    this.employeeService.createEmployee(this.empForm.value);
    this.router.navigate(['employees']);
  }
}
