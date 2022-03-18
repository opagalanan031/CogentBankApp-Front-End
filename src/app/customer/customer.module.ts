import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RegisterComponent } from './component/auth/register/register.component';
import { HomePageComponent } from './component/layout/home-page/home-page.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ForgotPasswordComponent } from './component/layout/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './component/layout/update-password/update-password.component';
import { ViewDashboardComponent } from './component/layout/view-dashboard/view-dashboard.component';
import { CreateAccountComponent } from './component/layout/create-account/create-account.component';
import { AddBeneficiaryComponent } from './component/layout/add-beneficiary/add-beneficiary.component';
import { RemoveBeneficiaryComponent } from './component/layout/remove-beneficiary/remove-beneficiary.component';
import { TransferAmountComponent } from './component/layout/transfer-amount/transfer-amount.component';
import { UpdateProfileComponent } from './component/layout/update-profile/update-profile.component';
import { ViewAccountsComponent } from './component/layout/view-accounts/view-accounts.component';
import { FormsModule } from '@angular/forms';
import { ViewStatementComponent } from './component/layout/view-statement/view-statement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegisterComponent,
    HomePageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    ViewDashboardComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    RemoveBeneficiaryComponent,
    TransferAmountComponent,
    UpdateProfileComponent,
    ViewAccountsComponent,
    ViewStatementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
  ],
})
export class CustomerModule {}
