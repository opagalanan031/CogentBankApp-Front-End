import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  loginReq = new LoginRequest();
  message: string = '';
  errorMsg: string = '';

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      if (this.authService.isCustomer()) {
        this.router.navigate(['/customer/dashboard']);
      } else if (this.authService.isStaff()) {
        this.router.navigate(['/staff/dashboard']);
      } else if (this.authService.isAdmin()) {
        this.router.navigate(['/admin/dashboard']);
      }
    }
  }

  login(): void {
    this.customerService.authenticate(this.loginReq).subscribe({
      next: (result) => {
        var roles = result.roles;
        if (roles.includes('ROLE_CUSTOMER')) {
          this.router.navigate(['/customer/dashboard']);
        } else if (roles.includes('ROLE_STAFF')) {
          this.router.navigate(['/staff/dashboard']);
        } else if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.errorMsg = 'Invalid role...';
          this.authService.logout();
        }
      },
      error: (err) => {
        this.errorMsg = err.message;
      },
    });
  }
}
