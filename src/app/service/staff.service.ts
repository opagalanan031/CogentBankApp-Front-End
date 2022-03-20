import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginRequest } from '../model/login-request';
import { JwtResponse } from '../interfaces/jwt-response';
import { AccountLookupResponse } from '../interfaces/account-lookup-response';
import { NonApprovedBeneficiaryResponse } from '../interfaces/non-approved-beneficiary-response';
import { ApproveBeneficiaryRequest } from '../model/approve-beneficiary-request';
import { NonApprovedAccountResponse } from '../interfaces/non-approved-account-response';
import { ApproveAccountRequest } from '../model/approve-account-request';
import { AllCustomersResponse } from '../interfaces/all-customers-response';
import { UpdateCustomerStatusRequest } from '../model/update-customer-status-request';
import { CustomerResponseFromStaff } from '../interfaces/customer-response-from-staff';
import { TransferRequest } from '../model/transfer-request';
import { StaffTransactionResponse } from '../interfaces/staff-transaction-response';
import { ApprovedAccountRequest } from '../model/approved-account-request';
import { TransferAmountRequest } from '../model/transfer-amount-request';

const API_URL = 'http://localhost:9015/api/staff/';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error Ouccurred: ', error.error.message);
    } else {
      console.error(
        `Backend Retuned Code ${error.status}, ` + `Body Was: ${error.error}`
      );
    }
    return throwError(() => new Error(error.error.message));
  }

  authenicate(request: LoginRequest): Observable<JwtResponse> {
    return this._http
      .post<JwtResponse>(API_URL + 'authenticate', request)
      .pipe(tap((value) => this._authService.setSession(value)))
      .pipe(catchError(this.errorHandler));
  }

  getAccountByAccNum(accountNum: number): Observable<AccountLookupResponse> {
    return this._http
      .get<AccountLookupResponse>(API_URL + 'account/' + accountNum)
      .pipe(catchError(this.errorHandler));
  }

  getNonBeneficiaries(): Observable<NonApprovedBeneficiaryResponse[]> {
    return this._http
      .get<NonApprovedBeneficiaryResponse[]>(API_URL + 'beneficiary')
      .pipe(catchError(this.errorHandler));
  }

  putBeneficiary(
    approve: ApproveBeneficiaryRequest
  ): Observable<ApproveBeneficiaryRequest> {
    return this._http
      .put<ApproveBeneficiaryRequest>(API_URL + 'beneficiary', approve)
      .pipe(catchError(this.errorHandler));
  }

  getNonApprovedAccs(): Observable<NonApprovedAccountResponse[]> {
    return this._http
      .get<NonApprovedAccountResponse[]>(API_URL + 'accounts/approve')
      .pipe(catchError(this.errorHandler));
  }

  putApproveAccs(
    approve: ApprovedAccountRequest
  ): Observable<ApprovedAccountRequest> {
    return this._http
      .put<ApprovedAccountRequest>(API_URL + 'accounts/approve', approve)
      .pipe(catchError(this.errorHandler));
  }

  getAllCusts(): Observable<AllCustomersResponse[]> {
    return this._http
      .get<AllCustomersResponse[]>(API_URL + 'customer')
      .pipe(catchError(this.errorHandler));
  }

  putCustomerStatus(
    enable: UpdateCustomerStatusRequest
  ): Observable<CustomerResponseFromStaff> {
    return this._http
      .put<CustomerResponseFromStaff>(API_URL + 'customer', enable)
      .pipe(catchError(this.errorHandler));
  }

  getCustomerById(CustomerId: number): Observable<CustomerResponseFromStaff> {
    return this._http
      .get<CustomerResponseFromStaff>(API_URL + 'customer/' + CustomerId)
      .pipe(catchError(this.errorHandler));
  }

  putTransfer(
    approve: TransferAmountRequest
  ): Observable<StaffTransactionResponse> {
    return this._http
      .put<StaffTransactionResponse>(API_URL + 'transfer', approve)
      .pipe(catchError(this.errorHandler));
  }
}
