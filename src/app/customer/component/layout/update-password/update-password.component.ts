import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePasswordRequest } from 'src/app/model/update-password-request';
import { CustomerService } from 'src/app/service/customer.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  updatePassword = new UpdatePasswordRequest();
  username: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private aRounter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.aRounter.queryParams.subscribe((data) => {
      this.username = data['username'];
    });
    console.log(this.username);
  }

  onSubmit(): void {
    if (this.updatePassword.confirmPassword != this.updatePassword.password) {
      window.alert('Passwords do not match!!!');
      document.getElementById('confirmPassword')?.focus();
      this.updatePassword.confirmPassword = '';
    } else {
      this.updatePassword.username = this.username;

      this.customerService
        .updatePassword(this.username, this.updatePassword)
        .subscribe(
          (data) => {
            window.alert('Password has been updated successfully!');
            console.log(data);
            this.router.navigate(['/']);
          },
          (error) => {
            window.alert('Unable to update password...');
            console.log(error);
          }
        );
    }
  }
}
