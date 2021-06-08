export class Employee {
  id: number;
  employeeId: string;
  fname: string;
  lname: string;
  emailId: string;
  dob: string;
  contact: string;

  constructor(info: { id: number; employeeId: string; fname: string; lname: string; emailId: string; contact: string; dob: string; }) {
    this.id = info.id;
    this.employeeId = info.employeeId;
    this.fname = info.fname;
    this.lname = info.lname;
    this.emailId = info.emailId;
    this.contact = info.contact;
    this.dob = info.dob;
  }
}


