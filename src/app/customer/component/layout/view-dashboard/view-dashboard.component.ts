import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css'],
})
export class ViewDashboardComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;

  username?: string;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
