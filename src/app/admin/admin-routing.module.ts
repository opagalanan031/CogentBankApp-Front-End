import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavGuard } from '../guards/admin-nav.guard';

import { CreateStaffComponent } from './component/auth/create-staff/create-staff.component';
import { ViewStaffComponent } from './component/layout/view-staff/view-staff.component';
//import { LoginComponent } from './component/auth/login/login.component';

const routes: Routes = [
  {
    path: 'create-staff',
    component: CreateStaffComponent,
    canActivate: [AdminNavGuard],
    canLoad: [AdminNavGuard],
  },
  {
    path: 'view-dashboard',
    component: ViewStaffComponent,
    canActivate: [AdminNavGuard],
    canLoad: [AdminNavGuard],
  },
  {
    path: 'view-staff',
    component: ViewStaffComponent,
    canActivate: [AdminNavGuard],
    canLoad: [AdminNavGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
