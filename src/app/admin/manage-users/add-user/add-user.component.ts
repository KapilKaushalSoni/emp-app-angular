import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobileNo: new FormControl('')

  });
  constructor(private usersService: UsersService,private route:Router) { }
  onSubmit() {
    this.usersService.add_user(this.userForm.value)
      .subscribe(p => {
        this.route.navigate(['admin/get-all-users']);
      });
  }
}
