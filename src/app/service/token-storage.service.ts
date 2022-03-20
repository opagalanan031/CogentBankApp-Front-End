import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from '../interfaces/jwt-response';
const TOKEN_KEY = 'auth-token';
const TOKEN_RESP_KEY = 'token-resp';
//const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_RESP_KEY);
  }

  public saveToken(jwtToken: JwtResponse) {
    localStorage.setItem(TOKEN_KEY, jwtToken.token);
    localStorage.setItem(TOKEN_RESP_KEY, JSON.stringify(jwtToken));
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public getTokenResponse(): JwtResponse | null {
    const res = localStorage.getItem(TOKEN_RESP_KEY);

    if (res) {
      return JSON.parse(res);
    }

    return null;
  }
}
