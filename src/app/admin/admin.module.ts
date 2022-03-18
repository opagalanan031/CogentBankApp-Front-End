import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './component/auth/login/login.component';
import { CreateStaffComponent } from './component/auth/create-staff/create-staff.component';
import { EnableStaffComponent } from './component/layout/enable-staff/enable-staff.component';
import { AddAdminComponent } from './component/auth/add-admin/add-admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    CreateStaffComponent,
    EnableStaffComponent,
    AddAdminComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
