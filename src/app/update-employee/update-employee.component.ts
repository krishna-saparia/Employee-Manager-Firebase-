import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

// import {MyErrorStateMatcher} from '../create-employee/create-employee.component';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  first_name = new FormControl('', Validators.required);
  last_name = new FormControl('', Validators.required);
  employeeId = new FormControl('', Validators.required);
  contact_no = new FormControl('', [Validators.required]);
  dob = new FormControl('', Validators.required);
  emailId = new FormControl('', [Validators.required, Validators.email]);
  public editForm: FormGroup;
  // id: number;
  employee: any;

  // matcher = new MyErrorStateMatcher();

  constructor(public employeeService: EmployeeService, public formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) {
    this.editForm = this.formBuilder.group({
      employeeId: [''],
      first_name: [''],
      last_name: [''],
      emailId: [''],
      contact_no: [''],
      dob: [''],
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(data => {
      this.employee = data;
      this.editForm = this.formBuilder.group({
        employeeId: [this.employee.employeeId],
        first_name: [this.employee.first_name],
        last_name: [this.employee.last_name],
        emailId: [this.employee.emailId],
        contact_no: [this.employee.contact_no],
        dob: [this.employee.dob]
      });
    }, error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.employeeService.updateEmployee(this.editForm.value, id);
    this.router.navigate(['employees']);
  }
}
