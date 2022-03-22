import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountDetailsResponse } from 'src/app/interfaces/account-details-response';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { TransactionsResponse } from 'src/app/interfaces/transactions-response';
//import { saveAs } from 'file-saver';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css'],
})
export class ViewStatementComponent implements OnInit {
  userId: any;
  accountDetails = {} as AccountDetailsResponse;
  transactions: TransactionsResponse[] = [];
  accounts: AllAccountsResponse[] = [];
  accountNo: any;
  accountLength: number = 0;

  constructor(
    private customerService: CustomerService,
    private router: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const jwtToken = this.tokenStorageService.getTokenResponse();
    this.userId = jwtToken?.id;

    this.router.queryParams.subscribe((data) => {
      this.accountNo = data['id'];
      console.log('accountNo' + this.accountNo);
      this.getTransactions();
    });

    this.getAccounts();
  }

  updateAccountNo(value: any) {
    console.log('accountNo: ' + value);
    this.accountNo = value;
    this.getTransactions();
  }

  getAccounts() {
    this.customerService.getAccounts(this.userId).subscribe((accounts) => {
      this.accounts = accounts;

      if (!this.accountNo && accounts.length > 0) {
        this.updateAccountNo(accounts[0].accountNumber);
      }
    });
  }

  getTransactions() {
    this.customerService
      .getAccount(this.userId, this.accountNo)
      .subscribe((data) => {
        console.log(data);
        this.accountDetails = data;
        this.transactions = data.transactions;
        console.log(this.transactions);
      });
  }
}
