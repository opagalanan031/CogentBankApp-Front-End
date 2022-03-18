import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css'],
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiary: any = {
    accountNumber: null,
    accountType: null,
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

  onSubmit(): void {
    const { accountType, accountNumber } = this.beneficiary;
    const user = this.tokenStorageService.getUser();

    console.log(accountType);

    this.customerService
      .addBeneficiary(user.id, accountNumber, accountType)
      .subscribe(
        (data) => {
          console.log(data);
          this.beneficiaryAdded();
        },
        (err) => {
          this.errorMessage = err.error.message;
        }
      );
  }

  beneficiaryAdded() {
    this.router.navigate(['/customer/dashboard']);
    alert('Beneficiary added successfully!');
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
