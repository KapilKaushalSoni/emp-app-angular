import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './admin/manage-users/add-user/add-user.component';
import { GetAllUsersComponent } from './admin/manage-users/get-all-users/get-all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddUserComponent,
    GetAllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
