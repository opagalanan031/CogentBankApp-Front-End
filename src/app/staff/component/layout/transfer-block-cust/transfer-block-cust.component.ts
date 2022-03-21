import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerStatus } from 'src/app/enums/customer-status';
import { AllCustomersResponse } from 'src/app/interfaces/all-customers-response';
import { UpdateCustomerStatusRequest } from 'src/app/model/update-customer-status-request';
import { StaffService } from 'src/app/service/staff.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-transfer-block-cust',
  templateUrl: './transfer-block-cust.component.html',
  styleUrls: ['./transfer-block-cust.component.css'],
})
export class TransferBlockCustComponent implements OnInit {
  customers: AllCustomersResponse[] = [];

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
    this._staffService.getAllCusts().subscribe((result) => {
      this.customers = result;
    });
  }

  setStatusEn(customerId: number): void {
    const approve = new UpdateCustomerStatusRequest();
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Please Login With Staff ID');
    } else {
      approve.customerId = customerId;
      approve.status = CustomerStatus.STATUS_ENABLED;
      this._staffService.putCustomerStatus(approve).subscribe((result) => {
        window.location.reload();
      });
    }
  }

  setStatusDis(customerId: number): void {
    const approve = new UpdateCustomerStatusRequest();
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Please Login With Staff ID');
    } else {
      approve.customerId = customerId;
      approve.status = CustomerStatus.STATUS_DISABLED;
      this._staffService.putCustomerStatus(approve).subscribe((result) => {
        window.location.reload();
      });
    }
  }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   // window.location.reload();
  //   this.router.navigate(['/staff/authenticate']);
  // }
}
