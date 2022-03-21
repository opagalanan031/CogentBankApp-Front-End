import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css'],
})
export class ViewDashboardComponent implements OnInit {
  userId: any;
  accounts: AllAccountsResponse[] = [];
  accountsV: AllAccountsResponse[] = [];
  errorMsg: string = '';

  constructor(
    private customerService: CustomerService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    const jwtToken = this.tokenStorageService.getTokenResponse();
    this.userId = jwtToken?.id;

    console.log(this.userId);

    this.customerService.getAccounts(this.userId).subscribe((accountsS) => {
      this.accountsV = accountsS;
      if (this.accountsV.length > 0) {
        this.accounts = this.accountsV;
        console.log(this.accounts);
      } else {
        this.errorMsg =
          'There is no available accounts in the system! Create a new account.';
      }
    });
  }

  getDetails(accountNo: number) {
    console.log(accountNo);
    location.href = '/view-statement?id=' + accountNo;
  }
}
