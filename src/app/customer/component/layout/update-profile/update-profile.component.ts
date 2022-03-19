import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AuthService } from 'src/app/service/auth.service';
import { UpdateCustomerRequest } from 'src/app/model/update-customer-request';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  form = new UpdateCustomerRequest();
  userId: number | undefined;

  errorMsg: string = '';
  message: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const jwtToken = this.tokenStorageService.getTokenResponse();
    this.userId = jwtToken?.id;

    if (this.userId) {
      this.customerService.getCustomer(this.userId).subscribe({
        next: (result) => {
          this.form.updateFromResponse(result);
        },
        error: (err) => {
          this.errorMsg = 'Unable to get details...';
        },
      });
    } else {
      this.errorMsg = 'Unable to get details...';
    }
  }

  updateProfile() {
    if (this.userId) {
      this.customerService.updateProfile(this.userId, this.form).subscribe({
        next: (result) => {
          alert('Profile updated successfully!');
          this.router.navigate(['/view-dashboard']);
        },
        error: (err) => {
          this.errorMsg = err.message;
        },
      });
    } else {
      this.errorMsg = 'User with ID:' + this.userId + 'does not exist...';
    }
  }
}
