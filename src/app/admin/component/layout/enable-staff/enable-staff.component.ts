import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/service/auth.service';
import { TokenStorageService } from 'src/app/admin/service/token-storage.service';

@Component({
  selector: 'app-enable-staff',
  templateUrl: './enable-staff.component.html',
  styleUrls: ['./enable-staff.component.css'],
})
export class EnableStaffComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {}
  onSubmit(): void {
    /*
    this.authService.createStaff(username, fullName, password).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    */
    this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['/admin/create-staff']);
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
