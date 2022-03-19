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
  matchedAnswer: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      this.secretA != this.matchedAnswer ||
      this.matchedAnswer == null ||
      this.matchedAnswer == ''
    ) {
      location.href = 'mismatched';
    } else {
      location.href = 'update-password?username=' + this.username;
    }
  }
}
