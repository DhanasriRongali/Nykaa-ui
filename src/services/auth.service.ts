import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginResponse {
  token: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.1.140:3000/api/user';
  
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: LoginResponse) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUserName(): string {
    const token = this.getToken();
    if (token) {
      try {
        // Decode the JWT token to get user info
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        return tokenData.name || 'User';
      } catch (e) {
        return 'User';
      }
    }
    return '';
  }

  logout() {
    localStorage.removeItem('token');
    // You might want to clear other stored data as well
    // localStorage.clear(); // Use this if you want to clear all localStorage
  }

  signup(userData: any): Observable<any> {
    // Replace with your actual API endpoint
    console.log('User Data1:', userData);
    return this.http.post('http://192.168.1.140:3000/api/user/signup', userData);
  }
}