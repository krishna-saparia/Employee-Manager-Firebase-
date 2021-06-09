import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Employee} from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private angularFirestore: AngularFirestore) {
  }

  getEmployee(id: string) {
    return this.angularFirestore
      .collection('employee-collection')
      .doc(id)
      .valueChanges();
  }

  getEmployeeList() {
    return this.angularFirestore
      .collection('employee-collection')
      .snapshotChanges();
  }

  createEmployee(employee: Employee) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('employee-collection')
        .add(employee)
        .then(response => {
          console.log(response);
        }, error => reject(error));
    });
  }

  deleteEmployee(id) {
    return this.angularFirestore
      .collection('employee-collection')
      .doc(id)
      .delete();
  }

  updateEmployee(employee: Employee, id) {
    return this.angularFirestore
      .collection('employee-collection')
      .doc(id)
      .update({
        employeeId: employee.employeeId,
        first_name: employee.first_name,
        last_name: employee.last_name,
        emailId: employee.emailId,
        contact_no: employee.contact_no,
        dob: employee.dob
      });
  }
}
