import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './admin/manage-users/add-user/add-user.component';
import { GetAllUsersComponent } from './admin/manage-users/get-all-users/get-all-users.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "employee", component: EmployeeComponent },
  
  {
    path: "admin", children: [{
      path: "add-user", component: AddUserComponent
    },
    {
      path: "get-all-users", component: GetAllUsersComponent
    }]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
