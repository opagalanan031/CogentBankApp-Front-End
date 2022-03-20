import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from 'src/app/service/auth.service';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new LoginRequest();
  errorMessage: string = '';
  // isLoggedIn = false;
  // isLoginFailed = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _staffService: StaffService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this._staffService.authenicate(this.form).subscribe(
      (data) => {
        var roles = data.roles;
        if (roles.includes('ROLE_STAFF')) {
          this._router.navigate(['/staff/dashboard']);
          // this.isLoginFailed = false;
          // this.isLoggedIn = true;
        }
        // if (roles.includes('ROLE_CUSTOMER')) {
        //   this._router.navigate(['/customer/dashboard']);
        // } else if (roles.includes('ROLE_STAFF')) {
        //   this._router.navigate(['/staff/dashboard']);
        //   this.isLoginFailed = false;
        //   this.isLoggedIn = true;
        // } else if (roles.includes('ROLE_ADMIN')) {
        //   this._router.navigate(['/admin/dashboard']);
        // }
        else {
          this.errorMessage = 'Please Check Your Current Role Specified';
          this._authService.logout();
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
    );
  }

  // gotoDashboard() {
  //   this.router.navigate(['/staff/dashboard']);
  // }
}
