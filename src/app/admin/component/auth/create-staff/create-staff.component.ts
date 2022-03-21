import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateStaffRequest } from 'src/app/model/create-staff-request';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css'],
})
export class CreateStaffComponent implements OnInit {
  registerForm = new CreateStaffRequest();
  confirmPassword: string = '';

  errorMsg: string = '';
  message: string = '';

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {}

  registerStaff() {
    if (this.registerForm.password !== this.confirmPassword) {
      this.errorMsg = 'Passwords do not match';
    } else if (
      !this.registerForm.username ||
      !this.registerForm.fullName ||
      !this.registerForm.password
    ) {
      alert('Invalid request');
    } else {
      this.errorMsg = '';
      this.adminService.createStaff(this.registerForm).subscribe({
        next: (result) => {
          alert('Staff added successfully');
          this.router.navigate(['/admin/view-dashboard']);
        },
        error: (err) => {
          this.errorMsg = err.message;
        },
      });
    }
  }
}
