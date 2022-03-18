import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:9015/api/staff/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'authenticate',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(
    username: string,
    fullName: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        username,
        fullName,
        password,
      },
      httpOptions
    );
  }
}
