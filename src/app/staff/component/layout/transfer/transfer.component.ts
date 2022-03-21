import { Component, OnInit } from '@angular/core';
import { TransferAmountRequest } from 'src/app/model/transfer-amount-request';
import { StaffService } from 'src/app/service/staff.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  fromAccNum: any;
  toAccNum: any;
  amount: any;
  reason: any;

  constructor(
    private _staffService: StaffService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  setTransfer(): void {
    if (this.fromAccNum && this.toAccNum && this.amount) {
      if (this.fromAccNum === this.toAccNum) {
        alert("You can't transfer money to the same account.");
      } else if (this.amount <= 0) {
        alert('Transfer amount must be more than zero.');
      } else {
        const approve = new TransferAmountRequest();
        const token = this._tokenStorageService.getTokenResponse();
        if (token === null) {
          console.log('Please Login With Staff ID.');
        } else {
          approve.fromAccNumber = this.fromAccNum;
          approve.toAccNumber = this.toAccNum;
          approve.amount = this.amount;
          approve.reason = this.reason;
          approve.by = token.username;
          this._staffService.putTransfer(approve).subscribe({
            next: (result) => {
              alert('Transfer successful!');
            },
            error: (err) => {
              alert(err.message);
            },
          });
        }
      }
    } else {
      alert('Please Check Account Number & Amonut You Need Transfer.');
    }
  }
}
