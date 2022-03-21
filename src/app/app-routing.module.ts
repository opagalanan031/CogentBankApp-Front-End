import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/component/layout/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  // {
  //   path: 'staff',
  //   loadChildren: () =>
  //     import('./staff/staff.module').then((m) => m.StaffModule),
  // },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
