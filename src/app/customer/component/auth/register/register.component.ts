import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/customer/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
    private formBuilder: FormBuilder
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
      .register(username, fullName, password)
      .subscribe((data) => {
        console.log(data);
      });
    this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['/customer/authenticate']);
    alert('Customer Registered successfully!');
  }
}
