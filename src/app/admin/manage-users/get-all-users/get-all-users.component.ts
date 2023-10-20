import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent {
  users:any[]=[];

  constructor(private userService: UsersService) {
    this.getUsers();
   }
  getUsers() {
    this.userService.get_all_user()
    .subscribe(p=>{
      this.users=p.data;
      console.log(this.users);
    });
  }
}
