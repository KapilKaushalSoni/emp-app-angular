import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './admin/manage-users/add-user/add-user.component';
import { GetAllUsersComponent } from './admin/manage-users/get-all-users/get-all-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login/login.component';
import { AuthAppServiceService } from './auth-app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddUserComponent,
    GetAllUsersComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthAppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
