import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryStatus } from 'src/app/enums/beneficiary-status';
import { BeneficiaryResponse } from 'src/app/interfaces/beneficiary-response';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-remove-beneficiary',
  templateUrl: './remove-beneficiary.component.html',
  styleUrls: ['./remove-beneficiary.component.css'],
})
export class RemoveBeneficiaryComponent implements OnInit {
  userId: any;
  submitted = false;
  beneficiaries: BeneficiaryResponse[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const jwtToken = this.tokenStorageService.getTokenResponse();
    this.userId = jwtToken?.id;
    this.getBeneficiaries();
  }

  getBeneficiaries() {
    this.customerService.getBeneficiaries(this.userId).subscribe((data) => {
      console.log(data);
      this.beneficiaries = data;
      console.log(this.beneficiaries);
    });
  }

  deleteBeneficiary(beneficiaryId: number) {
    this.customerService
      .deleteBeneficiary(this.userId, beneficiaryId)
      .subscribe(
        (data) => {
          console.log(data);
          window.alert('Beneficiary deleted successfully!');
          this.getBeneficiaries();
        },
        (error) => console.log(error)
      );
  }

  public get beneficiaryStatus(): typeof BeneficiaryStatus {
    return BeneficiaryStatus;
  }
}
