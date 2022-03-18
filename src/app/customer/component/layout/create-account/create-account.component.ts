import { Component, OnInit } from '@angular/core';
import { NewAccount } from 'src/app/customer/model/newAccount';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';
import { Account } from 'src/app/customer/model/account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  account: any = {
    accountType: null,
    amount: null,
  };
  newAccount?: NewAccount;
  isLoggedIn = false;
  username?: string;
  id?: number;
  errorMessage = '';

  constructor(
    private customerService: CustomerService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.id = user.id;
    }
  }

  onSubmit(): void {
    const { accountType, amount } = this.account;

    //this.newAccount = new NewAccount(accountType, amount);

    console.log(this.newAccount);
    const user = this.tokenStorageService.getUser();
    console.log(user.id);
    this.customerService.createAccount(user.id, accountType, amount).subscribe(
      (data) => {
        console.log(data);
        this.gotoDashboard();
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }

  gotoDashboard() {
    this.router.navigate(['/customer/dashboard']);
    alert('Account added successfully!');
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
