import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { StaffService } from 'src/app/service/staff.service';
import { NonApprovedAccountResponse } from 'src/app/interfaces/non-approved-account-response';
import { ApprovedAccountRequest } from 'src/app/model/approved-account-request';

@Component({
  selector: 'app-transfer-approve-acc',
  templateUrl: './transfer-approve-acc.component.html',
  styleUrls: ['./transfer-approve-acc.component.css'],
})
export class TransferApproveAccComponent implements OnInit {
  accounts: NonApprovedAccountResponse[] = [];

  constructor(
    private _tokenStorageService: TokenStorageService,
    private _staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this._staffService.getNonApprovedAccs().subscribe({
      next: (result) => {
        this.accounts = result;
      },
    });
  }

  setStatus(accountNum: number): void {
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Please Login With Staff ID');
    } else {
      const approve = new ApprovedAccountRequest();
      approve.accountNumber = accountNum;
      approve.approved = 'yes';
      approve.staffUserName = token.username;

      this._staffService.putApproveAccs(approve).subscribe((result) => {
        window.location.reload();
      });
    }
  }
}
