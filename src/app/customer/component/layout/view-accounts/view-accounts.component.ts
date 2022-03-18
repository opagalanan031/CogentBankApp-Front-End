import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/customer/model/accounts';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css'],
})
export class ViewAccountsComponent implements OnInit {
  accounts: Observable<Accounts[]> = this.reloadData();
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

  reloadData(): Observable<Accounts[]> {
    const user = this.tokenStorageService.getUser();
    return this.customerService.getAccounts(user.id);
  }
}
