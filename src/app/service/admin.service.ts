import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { JwtResponse } from '../interfaces/jwt-response';
import { StaffResponse } from '../interfaces/staff-response';
import { CreateStaffRequest } from '../model/create-staff-request';
import { LoginRequest } from '../model/login-request';
import { UpdateStaffRequest } from '../model/update-staff-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:9015/api/admin/';

  constructor(
    private _authService: AuthService,
    private _httpClient: HttpClient
  ) {}

  authAdmin(request: LoginRequest): Observable<JwtResponse> {
    return this._httpClient
      .post<JwtResponse>(this.baseUrl + 'authenticate', request)
      .pipe(tap((value) => this._authService.setSession(value)))
      .pipe(catchError(this.errorHandler));
  }

  createStaff(request: CreateStaffRequest): Observable<StaffResponse> {
    return this._httpClient
      .post<StaffResponse>(this.baseUrl + 'staff', request)
      .pipe(catchError(this.errorHandler));
  }

  getAllStaff(): Observable<StaffResponse[]> {
    return this._httpClient
      .get<StaffResponse[]>(this.baseUrl + 'staff')
      .pipe(catchError(this.errorHandler));
  }

  updateStaffStatus(request: UpdateStaffRequest): Observable<StaffResponse> {
    console.log(request);
    return this._httpClient
      .put<StaffResponse>(this.baseUrl + 'staff', request)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(() => new Error(error.error.message));
  }
}
