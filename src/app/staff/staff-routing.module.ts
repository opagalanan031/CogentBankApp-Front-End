import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/layout/login/login.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { TransferApproveAccComponent } from './component/layout/transfer-approve-acc/transfer-approve-acc.component';
import { TransferApproveBnfComponent } from './component/layout/transfer-approve-bnf/transfer-approve-bnf.component';
import { TransferBlockCustComponent } from './component/layout/transfer-block-cust/transfer-block-cust.component';
import { TransferByAccNumComponent } from './component/layout/transfer-by-acc-num/transfer-by-acc-num.component';
import { TransferComponent } from './component/layout/transfer/transfer.component';
import { StaffNavGuard } from '../guards/staff-nav.guard';

const routes: Routes = [
  {
    path: 'staff/login',
    component: LoginComponent,
  },
  {
    path: 'staff/transfer-approve-acc',
    component: TransferApproveAccComponent,
    canActivate: [StaffNavGuard],
    canLoad: [StaffNavGuard],
  },
  {
    path: 'staff/transfer-approve-bnf',
    component: TransferApproveBnfComponent,
    canActivate: [StaffNavGuard],
    canLoad: [StaffNavGuard],
  },
  {
    path: 'staff/transfer-block-cust',
    component: TransferBlockCustComponent,
    canActivate: [StaffNavGuard],
    canLoad: [StaffNavGuard],
  },
  {
    path: 'staff/transfer-by-acc-num',
    component: TransferByAccNumComponent,
    canActivate: [StaffNavGuard],
    canLoad: [StaffNavGuard],
  },
  {
    path: 'staff/dashboard',
    component: DashboardComponent,
    canActivate: [StaffNavGuard],
    canLoad: [StaffNavGuard],
  },
  {
    path: 'staff/transfer',
    component: TransferComponent,
    canActivate: [StaffNavGuard],
    canLoad: [StaffNavGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
