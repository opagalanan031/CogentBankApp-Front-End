import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { BeneficiaryResponse } from 'src/app/interfaces/beneficiary-response';
import { TransferRequest } from 'src/app/model/transfer-request';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css'],
  providers: [],
})
export class TransferAmountComponent implements OnInit {
  request: TransferRequest = new TransferRequest();
  accounts: AllAccountsResponse[] = [];
  beneficiaries: BeneficiaryResponse[] = [];
  userId: number | null = null;
  errorMsg: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const token = this.tokenStorageService.getTokenResponse();
    if (token) {
      this.userId = token.id;
      this.request.by = this.userId;
      this.loadAccounts(this.userId);
      this.loadBeneficiaries(this.userId);
    } else {
      alert('Unable to verify...');
    }
  }

  loadAccounts(userId: number) {
    this.customerService.getAccounts(userId).subscribe({
      next: (result) => {
        this.accounts = result;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  loadBeneficiaries(userId: number) {
    this.customerService.getBeneficiaries(userId).subscribe({
      next: (result) => {
        this.beneficiaries = result;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  transfer(): void {
    console.log(this.request);
    if (
      this.request.fromAccount &&
      this.request.toAccount &&
      this.request.amount
    ) {
      if (this.request.amount <= 0) {
        alert('Transferred amount cannot be less than or equal to 0...');
      } else if (this.request.fromAccount === this.request.toAccount) {
        alert('Cannot transfer to the same acount...');
      } else {
        this.customerService.transferAmount(this.request).subscribe({
          next: (result) => {
            alert('Money transferred successfully!');
            this.router.navigate(['/view-dashboard']);
          },
          error: (err) => {
            console.log(err.message);
            alert(err.message);
          },
        });
      }
    } else {
      this.errorMsg = 'Request invalid...';
    }
  }
}
