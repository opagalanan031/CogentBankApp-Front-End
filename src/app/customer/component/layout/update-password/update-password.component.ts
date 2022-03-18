import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCustomer } from 'src/app/customer/model/updateCustomer';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  form: any = {
    password: null,
  };
  isLoggedIn = false;
  username: string = 'username';
  id?: number;
  errorMessage = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { password } = this.form;

    this.customerService.updatePassword(this.username, password).subscribe(
      (data) => {
        console.log(data);
        this.customerUpdated();
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }

  customerUpdated() {
    this.router.navigate(['/customer/dashboard']);
    alert('Customer updated successfully!');
  }

  updatePassword() {
    this.router.navigate(['/customer/authenticate']);
    alert('Password updated successfully');
  }
}
