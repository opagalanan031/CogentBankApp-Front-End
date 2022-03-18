import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';
import { Beneficiary } from 'src/app/customer/model/beneficiary';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remove-beneficiary',
  templateUrl: './remove-beneficiary.component.html',
  styleUrls: ['./remove-beneficiary.component.css'],
})
export class RemoveBeneficiaryComponent implements OnInit {
  beneficiaries: Observable<Beneficiary[]> = this.reloadData();

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

  deleteBeneficiary(beneficiaryId: number) {
    const user = this.tokenStorageService.getUser();
    this.customerService.deleteBeneficiary(user.id, beneficiaryId).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  reloadData(): Observable<Beneficiary[]> {
    const user = this.tokenStorageService.getUser();
    return this.customerService.getBeneficiaries(user.id);
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
