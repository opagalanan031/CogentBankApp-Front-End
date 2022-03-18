import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './component/auth/add-admin/add-admin.component';
import { CreateStaffComponent } from './component/auth/create-staff/create-staff.component';
import { LoginComponent } from './component/auth/login/login.component';
import { EnableStaffComponent } from './component/layout/enable-staff/enable-staff.component';

const routes: Routes = [
  { path: 'authenticate', component: LoginComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'create-staff', component: CreateStaffComponent },
  { path: 'enable-staff', component: EnableStaffComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
