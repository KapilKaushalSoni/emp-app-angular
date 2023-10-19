import { Component } from '@angular/core';
import { ApicallsService } from '../apicalls.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  fname!: string;
  lname!: string;
  newid!:string;
  emp: any;
  constructor(private apiservice: ApicallsService) {

  }
  saveFunction() {
    this.emp = { First_Name: this.fname, Last_Name: this.lname };
    this.apiservice.save_employee(this.emp)
      .subscribe(p => {
        this.newid=p.id;
        console.log(p);
      })
  }
}
