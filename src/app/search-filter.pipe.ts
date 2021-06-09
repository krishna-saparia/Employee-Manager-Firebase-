import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './employee.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(employee: Employee[], searchvalue: string): Employee[] {
    if (!employee || !searchvalue) {
      return employee;
    }
    // Use filter to search data by first name and last name.
    return employee.filter(data =>
      data.first_name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      data.last_name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      data.employeeId.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );

  }

}
