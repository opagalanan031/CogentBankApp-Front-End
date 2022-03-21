import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateStaffComponent } from './component/auth/create-staff/create-staff.component';
import { ViewStaffComponent } from './component/layout/view-staff/view-staff.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CreateStaffComponent, ViewStaffComponent, NavbarComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
