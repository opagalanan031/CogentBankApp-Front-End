import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  userId: any;
  username: any;

  secretQ: any;
  secretA: any;
  matchedQ: any;
  matchedA: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.secretA);
    console.log(this.matchedA);
    if (
      this.secretA != this.matchedA ||
      this.matchedA == null ||
      this.matchedA == ''
    ) {
      location.href = 'mismatched';
    } else {
      location.href = 'update-password?username=' + this.username;
    }
  }

  getUsername(value: any) {
    this.username = value;
    this.customerService.getDetails(this.username).subscribe(
      (data) => {
        console.log(data);
        this.matchedQ = data.secretQ;
        this.matchedA = data.secretA;
      },
      (error) => {
        console.log(error);
        this.secretQ = '';
      }
    );
  }
}
