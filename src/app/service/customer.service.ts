import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiMessage } from '../interfaces/api-message';
import { AuthService } from './auth.service';
import { RegisterRequest } from '../model/register-request';
import { RegisterCustomerResponse } from '../interfaces/register-customer-response';
import { LoginRequest } from '../model/login-request';
import { JwtResponse } from '../interfaces/jwt-response';
import { CreateAccountRequest } from '../model/create-account-request';
import { AllAccountsResponse } from '../interfaces/all-accounts-response';
import { AddBeneficiaryRequest } from '../model/add-beneficiary-request';
import { AddBeneficiaryResponse } from '../interfaces/add-beneficiary-response';
import { BeneficiaryResponse } from '../interfaces/beneficiary-response';
import { TransferRequest } from '../model/transfer-request';
import { TransferResponse } from '../interfaces/transfer-response';
import { UpdateCustomerRequest } from '../model/update-customer-request';
import { CustomerResponse } from '../interfaces/customer-response';
import { AccountDetailsResponse } from '../interfaces/account-details-response';
import { ApproveAccountRequest } from '../model/approve-account-request';
import { StaffApproveAccountResponse } from '../interfaces/staff-approve-account-response';
import { GetCustomerDetailsResponse } from '../interfaces/get-customer-details-response';
import { UpdatePasswordRequest } from '../model/update-password-request';

const API_URL = 'http://localhost:9015/api/customer/';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  register(request: RegisterRequest): Observable<RegisterCustomerResponse> {
    return this.http
      .post<RegisterCustomerResponse>(API_URL + 'register', request)
      .pipe(catchError(this.errorHandler));
  }

  authenticate(request: LoginRequest): Observable<JwtResponse> {
    return this.http
      .post<JwtResponse>(API_URL + 'authenticate', request)
      .pipe(tap((value) => this.authService.setSession(value)))
      .pipe(catchError(this.errorHandler));
  }

  getAccounts(userId: number): Observable<AllAccountsResponse[]> {
    console.log(userId);
    return this.http
      .get<AllAccountsResponse[]>(API_URL + userId + '/account')
      .pipe(catchError(this.errorHandler));
  }

  createAccount(
    userId: number,
    request: CreateAccountRequest
  ): Observable<RegisterCustomerResponse> {
    return this.http
      .post<RegisterCustomerResponse>(API_URL + userId + '/account', request)
      .pipe(catchError(this.errorHandler));
  }

  approveAccount(
    userId: number,
    accountNo: number,
    request: ApproveAccountRequest
  ): Observable<StaffApproveAccountResponse> {
    return this.http
      .put<StaffApproveAccountResponse>(
        API_URL + userId + '/account/' + accountNo,
        request
      )
      .pipe(catchError(this.errorHandler));
  }

  getAccount(
    userId: number,
    accountNo: number
  ): Observable<AccountDetailsResponse> {
    return this.http
      .get<AccountDetailsResponse>(API_URL + userId + '/account/' + accountNo)
      .pipe(catchError(this.errorHandler));
  }

  addBeneficiary(
    userId: number,
    request: AddBeneficiaryRequest
  ): Observable<AddBeneficiaryResponse> {
    return this.http
      .post<AddBeneficiaryResponse>(API_URL + userId + '/beneficiary', request)
      .pipe(catchError(this.errorHandler));
  }

  getBeneficiaries(userId: number): Observable<BeneficiaryResponse[]> {
    return this.http
      .get<BeneficiaryResponse[]>(API_URL + userId + '/beneficiary')
      .pipe(catchError(this.errorHandler));
  }

  deleteBeneficiary(
    userId: number,
    beneficiaryId: number
  ): Observable<ApiMessage> {
    return this.http
      .delete<ApiMessage>(API_URL + userId + '/beneficiary/' + beneficiaryId)
      .pipe(catchError(this.errorHandler));
  }

  transferAmount(request: TransferRequest): Observable<TransferResponse> {
    return this.http
      .put<TransferResponse>(API_URL + 'transfer', request)
      .pipe(catchError(this.errorHandler));
  }

  getCustomer(userId: number): Observable<CustomerResponse> {
    return this.http
      .get<CustomerResponse>(API_URL + userId)
      .pipe(catchError(this.errorHandler));
  }

  updateProfile(
    userId: number,
    request: UpdateCustomerRequest
  ): Observable<CustomerResponse> {
    return this.http
      .put<CustomerResponse>(API_URL + userId, request)
      .pipe(catchError(this.errorHandler));
  }

  getDetails(username: string): Observable<GetCustomerDetailsResponse> {
    return this.http
      .get<GetCustomerDetailsResponse>(
        API_URL + username + '/forgot/question/answer'
      )
      .pipe(catchError(this.errorHandler));
  }

  updatePassword(
    username: string,
    request: UpdatePasswordRequest
  ): Observable<ApiMessage> {
    return this.http
      .put<ApiMessage>(API_URL + username + '/forgot', request)
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
