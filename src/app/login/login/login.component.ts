import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string
  password!: string
  userData: any;
  constructor(private userService: UsersService, private route: Router) { }
  loginNow() {
    this.userData = { UserName: this.username, Password: this.password };
    console.log(this.userData);

    this.userService.login_service(this.userData)
      .subscribe(p => {
        console.log(p);
        if (p.success) {
          localStorage.setItem("token", p.token);
          this.route.navigate(["admin/get-all-users"]);
        }
      });
  }
}
