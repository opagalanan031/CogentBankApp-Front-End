import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { TransferApproveAccComponent } from './component/layout/transfer-approve-acc/transfer-approve-acc.component';
import { TransferApproveBnfComponent } from './component/layout/transfer-approve-bnf/transfer-approve-bnf.component';
import { TransferBlockCustComponent } from './component/layout/transfer-block-cust/transfer-block-cust.component';
import { TransferByAccNumComponent } from './component/layout/transfer-by-acc-num/transfer-by-acc-num.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'transfer-approve-acc', component: TransferApproveAccComponent },
  { path: 'transfer-approve-bnf', component: TransferApproveBnfComponent },
  { path: 'transfer-block-cust', component: TransferBlockCustComponent },
  { path: 'transfer-by-acc-num', component: TransferByAccNumComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  // declarations: [RouterModule.forChild(routes)],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
