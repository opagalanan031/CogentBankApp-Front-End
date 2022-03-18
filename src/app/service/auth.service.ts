import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { JwtResponse } from '../interfaces/jwt-response';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userDetails: BehaviorSubject<JwtResponse | null> =
    new BehaviorSubject<JwtResponse | null>(
      this.tokenStorageService.getTokenResponse()
    );

  constructor(private tokenStorageService: TokenStorageService) {}

  logout(): void {
    this.tokenStorageService.clear();
    this.userDetails.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorageService.getToken();
  }

  isCustomer(): boolean {
    const token = this.tokenStorageService.getTokenResponse();

    if (token) {
      console.log(token.roles);
      return token.roles.includes('ROLE_CUSTOMER');
    }

    return false;
  }

  isStaff(): boolean {
    const token = this.tokenStorageService.getTokenResponse();

    if (token) {
      console.log(token.roles);
      return token.roles.includes('ROLE_STAFF');
    }

    return false;
  }

  isAdmin(): boolean {
    const token = this.tokenStorageService.getTokenResponse();

    if (token) {
      console.log(token.roles);
      return token.roles.includes('ROLE_ADMIN');
    }

    return false;
  }

  getUserDetails(): Observable<JwtResponse | null> {
    return this.userDetails.asObservable();
  }

  getTokenResponse(): JwtResponse | null {
    return this.tokenStorageService.getTokenResponse();
  }

  setSession(response: JwtResponse) {
    console.log('logged in; set session');
    this.tokenStorageService.saveToken(response);
    this.userDetails.next(response);
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Back end returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError(() => new Error(error.error.message));
  }
}
