import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCustomer } from 'src/app/customer/model/updateCustomer';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  updateCustomer?: UpdateCustomer;

  form: any = {
    fullName: null,
    phone: null,
    pan: null,
    aadhar: null,
    secretQuestion: null,
    secretAnswer: null,
    panImage: null,
    aadharImage: null,
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

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.id = user.id;
    }
  }

  onSubmit(): void {
    const user = this.tokenStorageService.getUser();
    const {
      fullName,
      phone,
      pan,
      aadhar,
      secretQuestion,
      secretAnswer,
      panImage,
      aadharImage,
    } = this.form;

    this.updateCustomer = new UpdateCustomer(
      fullName,
      phone,
      pan,
      aadhar,
      secretQuestion,
      secretAnswer,
      panImage,
      aadharImage
    );

    console.log(this.updateCustomer.panImage);

    this.customerService.updateProfile(user.id, this.updateCustomer).subscribe(
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

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
