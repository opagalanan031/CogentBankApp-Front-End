import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/enums/account-type';
import { AddBeneficiaryRequest } from 'src/app/model/add-beneficiary-request';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css'],
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiary: AddBeneficiaryRequest = new AddBeneficiaryRequest();
  userId: any;
  submitted = false;
  @ViewChild('confirmAccount')
  confirmAccount: ElementRef | undefined;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const jwtToken = this.tokenStorageService.getTokenResponse();
    this.userId = jwtToken?.id;
  }

  public get accountType(): typeof AccountType {
    return AccountType;
  }

  addBeneficiary() {
    if (
      this.beneficiary.accountNumber == null ||
      this.confirmAccount?.nativeElement.value == '' ||
      this.beneficiary.accountNumber != this.confirmAccount?.nativeElement.value
    ) {
      console.log(
        this.beneficiary.accountNumber +
          ',' +
          this.confirmAccount?.nativeElement.value
      );
      window.alert('Account numbers do not match.');
      document.getElementById('comfirmAccount')?.focus();
    } else {
      console.log(
        this.beneficiary.accountNumber +
          ',' +
          this.confirmAccount?.nativeElement.value
      );
      this.customerService
        .addBeneficiary(this.userId, this.beneficiary)
        .subscribe(
          (data) => {
            window.alert('Beneficiary added successfully!');
            this.gotoDashboard();
            console.log(data);
          },
          (error) => {
            window.alert(error.message);
            console.log(error);
          }
        );
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.addBeneficiary();
  }

  gotoDashboard() {
    this.router.navigate(['/customer/view-dashboard']);
  }
}
