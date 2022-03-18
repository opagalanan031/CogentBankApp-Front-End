import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-transfer-by-acc-num',
  templateUrl: './transfer-by-acc-num.component.html',
  styleUrls: ['./transfer-by-acc-num.component.css'],
})
export class TransferByAccNumComponent implements OnInit {
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
