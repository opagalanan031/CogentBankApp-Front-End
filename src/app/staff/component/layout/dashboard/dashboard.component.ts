import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() // private router: Router // private tokenStorageService: TokenStorageService,
  {}

  ngOnInit(): void {
    // this.isLoggedIn = !!this.tokenStorageService.getToken();
    // if (this.isLoggedIn) {
    //   const staff = this.tokenStorageService.getUser();
    //   this.roles = staff.roles;
    //   this.username = staff.username;
    // }
  }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   // window.location.reload();
  //   this.router.navigate(['/staff/authenticate']);
  // }
}
