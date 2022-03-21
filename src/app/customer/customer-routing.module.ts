import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerNavGuard } from '../guards/customer-nav.guard';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { AddBeneficiaryComponent } from './component/layout/add-beneficiary/add-beneficiary.component';
import { CreateAccountComponent } from './component/layout/create-account/create-account.component';
import { ForgotPasswordComponent } from './component/layout/forgot-password/forgot-password.component';
import { MismatchedComponent } from './component/layout/mismatched/mismatched.component';

import { RemoveBeneficiaryComponent } from './component/layout/remove-beneficiary/remove-beneficiary.component';
import { TransferAmountComponent } from './component/layout/transfer-amount/transfer-amount.component';
import { UpdatePasswordComponent } from './component/layout/update-password/update-password.component';
import { UpdateProfileComponent } from './component/layout/update-profile/update-profile.component';
import { ViewAccountsComponent } from './component/layout/view-accounts/view-accounts.component';
import { ViewDashboardComponent } from './component/layout/view-dashboard/view-dashboard.component';
import { ViewStatementComponent } from './component/layout/view-statement/view-statement.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'authenticate',
    component: LoginComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    //canActivate: [CustomerNavGuard],
    //canLoad: [CustomerNavGuard],
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent,
    //canActivate: [CustomerNavGuard],
    //canLoad: [CustomerNavGuard],
  },
  {
    path: 'mismatched',
    component: MismatchedComponent,
    //canActivate: [CustomerNavGuard],
    //canLoad: [CustomerNavGuard],
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'view-dashboard',
    component: ViewDashboardComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'add-beneficiary',
    component: AddBeneficiaryComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'remove-beneficiary',
    component: RemoveBeneficiaryComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'transfer-amount',
    component: TransferAmountComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'view-accounts',
    component: ViewAccountsComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
  {
    path: 'view-statement',
    component: ViewStatementComponent,
    canActivate: [CustomerNavGuard],
    canLoad: [CustomerNavGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
