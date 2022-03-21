import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/layout/login/login.component';
import { TransferByAccNumComponent } from './component/layout/transfer-by-acc-num/transfer-by-acc-num.component';
import { TransferBlockCustComponent } from './component/layout/transfer-block-cust/transfer-block-cust.component';
import { TransferApproveBnfComponent } from './component/layout/transfer-approve-bnf/transfer-approve-bnf.component';
import { TransferApproveAccComponent } from './component/layout/transfer-approve-acc/transfer-approve-acc.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { TransferComponent } from './component/layout/transfer/transfer.component';

@NgModule({
  declarations: [
    LoginComponent,
    TransferByAccNumComponent,
    TransferBlockCustComponent,
    TransferApproveBnfComponent,
    TransferApproveAccComponent,
    DashboardComponent,
    TransferComponent,
  ],
  imports: [CommonModule, StaffRoutingModule, FormsModule],
  exports: [DashboardComponent],
})
export class StaffModule {}
