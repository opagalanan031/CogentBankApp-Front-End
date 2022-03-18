import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  isCustomer: boolean = false;
  isStaff: boolean = false;
  isAdmin: boolean = false;
  username: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private refer: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
    this.isCustomer = this.authService.isCustomer();
    this.isStaff = this.authService.isStaff();
    this.isAdmin = this.authService.isAdmin();

    this.authService.getUserDetails().subscribe((jwtToken) => {
      if (jwtToken == null) {
        this.loggedIn = false;
        this.username = '';
        this.isAdmin = false;
        this.isStaff = false;
        this.isCustomer = false;
      } else {
        this.loggedIn = true;
        this.username = jwtToken.username;
        this.isCustomer = jwtToken.roles.includes('ROLE_CUSTOMER');
        this.isStaff = jwtToken.roles.includes('ROLE_STAFF');
        this.isAdmin = jwtToken.roles.includes('ROLE_ADMIN');
      }

      this.refer.detectChanges();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
