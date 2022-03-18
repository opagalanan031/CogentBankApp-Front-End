import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/model/register-request';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = new RegisterRequest();
  confirmPassword: string = '';

  errorMsg: string = '';
  message: string = '';

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  register() {
    if (this.form.password !== this.confirmPassword) {
      this.errorMsg = 'Passwords do not match!!!';
    } else {
      this.errorMsg = '';
      this.customerService.register(this.form).subscribe({
        next: (result) => {
          alert('Customer registered successfully!');
          this.router.navigate(['']);
        },
        error: (err) => {
          this.errorMsg = err.message;
        },
      });
    }
  }
}
