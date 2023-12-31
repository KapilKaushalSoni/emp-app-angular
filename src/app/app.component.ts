import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'first-app';

  constructor(private router: Router) {

  }
  functionOnWhichRedirectShouldHappen() {
    this.router.navigate(['/employee']);
  }
  logOutNow() {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    this.router.navigate(['/login']);
  }
}
