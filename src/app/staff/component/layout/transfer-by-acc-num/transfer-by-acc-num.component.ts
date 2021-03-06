import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLookupResponse } from 'src/app/interfaces/account-lookup-response';
import { StaffService } from 'src/app/service/staff.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-transfer-by-acc-num',
  templateUrl: './transfer-by-acc-num.component.html',
  styleUrls: ['./transfer-by-acc-num.component.css'],
})
export class TransferByAccNumComponent implements OnInit {
  accounts!: AccountLookupResponse;
  accountNum: any;
  customerName: any;
  accountBalance: any;
  accountNumber: any;

  constructor(
    private _tokenStorageService: TokenStorageService,
    private _staffService: StaffService
  ) {}

  ngOnInit(): void {
    // this.isLoggedIn = !!this.tokenStorageService.getToken();
    // if (this.isLoggedIn) {
    //   const staff = this.tokenStorageService.getUser();
    //   this.roles = staff.roles;
    //   this.username = staff.username;
    // }
  }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   // window.location.reload();
  //   this.router.navigate(['/staff/authenticate']);
  // }

  accountDetails(): void {
    console.log(this.accountNum);
    this._staffService.getAccountByAccNum(this.accountNum).subscribe({
      next: (result) => {
        this.accounts = result;
        this.customerName = this.accounts.customerName;

        this.accountBalance = this.accounts.accountBalance;
        this.accountNumber = this.accounts.accountNumber;
      },
      error: (err) => {
        this.accounts = {} as AccountLookupResponse;
        this.customerName = '';
        this.accountBalance = '';
        this.accountNumber = '';
        console.log(err.message);
        if (err.message === 'Sorry, Account Not Found') {
          alert('Account does not exist, please check account number.');
        } else {
          alert('Invalid input. Please enter a numeric value.');
        }
      },
    });
  }
}
