import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Employee} from './employee.model'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private angularFirestore: AngularFirestore) { }

  getEmployee(id) {
    return this.angularFirestore
      .collection('employee-collection')
      .doc(id)
      .valueChanges()
  }

  getEmployeeList() {
    return this.angularFirestore
      .collection("employee-collection")
      .snapshotChanges();
  }

  createEmployee(employee: Employee) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("employee-collection")
        .add(employee)
        .then(response => {console.log(response)}, error => reject(error));
    });
  }

  deleteEmployee(employee) {
    return this.angularFirestore
      .collection("employee-collection")
      .doc(employee.employeeId)
      .delete();
  }

  updateEmployee(employee: Employee, id) {
    return this.angularFirestore
      .collection("employee-collection")
      .doc(id)
      .update({
        id: employee.id,
        eId: employee.employeeId,
        fname: employee.fname,
        lname: employee.lname,
        email: employee.emailId,
        dob: employee.dob,
        contact: employee.contact
      });
  }
}
