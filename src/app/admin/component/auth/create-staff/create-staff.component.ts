import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/service/auth.service';
import { TokenStorageService } from 'src/app/admin/service/token-storage.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css'],
})
export class CreateStaffComponent implements OnInit {
  formGroup: any = {
    username: null,
    fullName: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  passwordFormGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService
  ) {
    this.passwordFormGroup = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        passwordConfirmation: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
      },
      {
        validators: [
          (form: AbstractControl) => {
            const { password, passwordConfirmation } = form.value;
            if (password !== passwordConfirmation) {
              return {
                notMatched: true,
              };
            } else {
              return null;
            }
          },
        ],
      }
    );
  }
  //
  ngOnInit(): void {}
  onSubmit(): void {
    const { username, fullName, password } = this.passwordFormGroup.value;
    this.authService
      .createStaff(username, fullName, password)
      .subscribe((data) => {
        console.log(data);
      });
    this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['/admin/create-staff']);
    alert('Customer Registered successfully!');
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
