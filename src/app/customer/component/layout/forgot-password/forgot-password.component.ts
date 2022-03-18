import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCustomer } from 'src/app/customer/model/updateCustomer';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  form: any = {
    username: null,
    secretQuestion: null,
    secretAnswer: null,
  };
  isLoggedIn = false;
  username?: string;
  id?: number;
  errorMessage = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, secretQuestion, secretAnswer } = this.form;
    console.log(username);
    console.log(secretQuestion);
    console.log(secretAnswer);
    this.customerService
      .getDetails(username, secretQuestion, secretAnswer)
      .subscribe(
        (data) => {
          console.log(data);
          this.updatePassword();
        },
        (err) => {
          this.errorMessage = err.error.message;
        }
      );
  }

  updatePassword() {
    this.router.navigate(['/customer/update-password']);
  }
}
