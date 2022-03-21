import { Component, OnInit } from '@angular/core';
import { CustomerStatus } from 'src/app/enums/customer-status';
import { StaffRespose } from 'src/app/interfaces/staff-respose';
import { UpdateStaffRequest } from 'src/app/model/update-staff-request';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  staffs: StaffRespose[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  setEnableStatus(staffId: number): void {
    const request = new UpdateStaffRequest();
    request.staffId = staffId;
    request.status = CustomerStatus.STATUS_ENABLED;

    this.adminService.updateStaffStatus(request).subscribe({
      next: (result) => {
        this.reloadData();
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  setDisableStatus(staffId: number): void {
    const request = new UpdateStaffRequest();
    request.staffId = staffId;
    request.status = CustomerStatus.STATUS_DISABLED;

    console.log(request.status);
    this.adminService.updateStaffStatus(request).subscribe({
      next: (result) => {
        this.reloadData();
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  reloadData() {
    this.adminService.getAllStaff().subscribe({
      next: (result) => {
        this.staffs = result;
        console.log(this.staffs);
      },
    });
  }
}
