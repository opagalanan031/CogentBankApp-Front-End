import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonApprovedBeneficiaryResponse } from 'src/app/interfaces/non-approved-beneficiary-response';
import { ApproveBeneficiaryRequest } from 'src/app/model/approve-beneficiary-request';
import { StaffService } from 'src/app/service/staff.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-transfer-approve-bnf',
  templateUrl: './transfer-approve-bnf.component.html',
  styleUrls: ['./transfer-approve-bnf.component.css'],
})
export class TransferApproveBnfComponent implements OnInit {
  benefs: NonApprovedBeneficiaryResponse[] = [];

  constructor(
    private _tokenStorageService: TokenStorageService,
    private _staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.reloadData();
    // this.isLoggedIn = !!this.tokenStorageService.getToken();
    // if (this.isLoggedIn) {
    //   const staff = this.tokenStorageService.getUser();
    //   this.roles = staff.roles;

    //   this.username = staff.username;
    // }
  }

  reloadData() {
    this._staffService.getNonBeneficiaries().subscribe((result) => {
      this.benefs = result;
    });
  }

  setStatus(customer: number, accountNum: number): void {
    const approve = new ApproveBeneficiaryRequest();

    approve.customerId = customer;
    approve.beneficiaryAccountNumber = accountNum;
    approve.isApproved = 'STATUS_APPROVED';
    this._staffService.putBeneficiary(approve).subscribe(
      (result) => {
        alert('The beneficiary has been approved.');
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   // window.location.reload();
  //   this.router.navigate(['/staff/authenticate']);
  // }
}
