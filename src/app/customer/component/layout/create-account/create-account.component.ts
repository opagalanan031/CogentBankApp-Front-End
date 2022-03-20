import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { CreateAccountRequest } from 'src/app/model/create-account-request';
import { AccountType } from 'src/app/enums/account-type';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  userId: any;
  account: CreateAccountRequest = new CreateAccountRequest();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const jwtToken = this.tokenStorageService.getTokenResponse();
    this.userId = jwtToken?.id;
  }

  newAccount(): void {
    this.submitted = false;
    this.account = new CreateAccountRequest();
  }

  onSubmit(): void {
    this.submitted = true;
    this.createAccount();
  }

  createAccount() {
    console.log(this.account);
    if (
      this.account.accountBalance! < 0 ||
      this.account.accountBalance == null ||
      this.account.accountBalance!! == 0
    ) {
      document.getElementById('deposit')?.focus;
      window.alert('deposit must be greater than zero...');
    } else {
      this.customerService.createAccount(this.userId, this.account).subscribe(
        (data) => {
          window.alert('Account created successfully!');
          console.log(data);
          this.gotoDashboard();
        },
        (error) => {
          window.alert('Failed to create an account...');
          console.log(error);
        }
      );
    }
  }

  public get accountType(): typeof AccountType {
    return AccountType;
  }

  gotoDashboard() {
    location.href = '/view-dashboard';
  }
}
