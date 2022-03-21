import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/layout/login/login.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { TransferApproveAccComponent } from './component/layout/transfer-approve-acc/transfer-approve-acc.component';
import { TransferApproveBnfComponent } from './component/layout/transfer-approve-bnf/transfer-approve-bnf.component';
import { TransferBlockCustComponent } from './component/layout/transfer-block-cust/transfer-block-cust.component';
import { TransferByAccNumComponent } from './component/layout/transfer-by-acc-num/transfer-by-acc-num.component';
import { TransferComponent } from './component/layout/transfer/transfer.component';

const routes: Routes = [
  {
    path: 'staff/login',
    component: LoginComponent,
  },
  {
    path: 'staff/transfer-approve-acc',
    component: TransferApproveAccComponent,
  },
  {
    path: 'staff/transfer-approve-bnf',
    component: TransferApproveBnfComponent,
  },
  {
    path: 'staff/transfer-block-cust',
    component: TransferBlockCustComponent,
  },
  {
    path: 'staff/transfer-by-acc-num',
    component: TransferByAccNumComponent,
  },
  {
    path: 'staff/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'staff/transfer',
    component: TransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
