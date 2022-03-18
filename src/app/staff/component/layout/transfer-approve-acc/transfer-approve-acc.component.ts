import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-transfer-approve-acc',
  templateUrl: './transfer-approve-acc.component.html',
  styleUrls: ['./transfer-approve-acc.component.css'],
})
export class TransferApproveAccComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  id?: number;
  roles?: string;
  errorMessage = '';

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const staff = this.tokenStorageService.getUser();
      this.roles = staff.roles;

      this.username = staff.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigate(['/staff/authenticate']);
  }
}
