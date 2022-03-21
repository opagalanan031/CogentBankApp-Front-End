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
    this._staffService.getAccountByAccNum(this.accountNum).subscribe({
      next: (result) => {
        this.accounts = result;
        this.customerName = this.accounts.firstName
          .concat(' ')
          .concat(this.accounts.lastName);
        this.accountBalance = this.accounts.balance;
        this.accountNumber = this.accounts.accountNumber;
      },
      error: (err) => {
        this.accounts = {} as AccountLookupResponse;
        this.customerName = '';
        this.accountBalance = '';
        this.accountNumber = '';
        console.log(err.message);
        if (err.message === 'account not found') {
          alert('Account Does Not Exist, Please Check Account Number.');
        } else {
          alert('Invalid Input. Please Enter Number Only.');
        }
      },
    });
  }
}
