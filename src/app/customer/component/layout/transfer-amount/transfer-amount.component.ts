import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/customer/model/account';
import { Accounts } from 'src/app/customer/model/accounts';
import { Transfer } from 'src/app/customer/model/transfer';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css'],
  providers: [],
})
export class TransferAmountComponent implements OnInit {
  accountList: Observable<Account[]> = this.reloadData();
  transfer?: Transfer;
  form: any = {
    toAccount: null,
    fromAccount: null,
    amount: null,
    reason: null,
  };
  isLoggedIn = false;
  username?: string;
  id?: number;
  errorMessage = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.id = user.id;
    }
  }

  onSubmit() {
    const user = this.tokenStorageService.getUser();
    const { toAccount, fromAccount, amount, reason } = this.form;

    this.transfer = new Transfer(
      toAccount,
      fromAccount,
      amount,
      reason,
      user.username
    );

    this.customerService.transferAmount(this.transfer).subscribe(
      (data) => {
        console.log(data);
        this.transfered();
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }

  reloadData(): Observable<Account[]> {
    const user = this.tokenStorageService.getUser();
    return this.customerService.getAccounts(user.id);
  }

  transfered() {
    this.router.navigate(['/customer/dashboard']);
    alert('Transfered successfully!');
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
