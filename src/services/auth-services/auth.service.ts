import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  token: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/user`;
  private userNameSubject = new BehaviorSubject<string>('');
  private userName$ = this.userNameSubject.asObservable();

  constructor(private http: HttpClient) {
    // Load username if token exists
    if (this.isLoggedIn()) {
      this.loadUserName();
    }
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

 

  loadUserName() {
    
    const headers = this.getHeaders();
    
    this.http.get<any>(`${this.apiUrl}`, { headers })
      .subscribe({
        next: (response) => {
          console.log('User profile response:', response);
          const userName = response.name || 'Account';
          console.log('Setting username to:', userName);
          this.userNameSubject.next(userName);
        },
        error: (error) => {
          console.error('Error loading username:', error);
          console.log('Setting default username: Account');
          this.userNameSubject.next('Account');
        }
      });
  }

  getUserName(): Observable<string> {
    return this.userName$;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.loadUserName(); // Load username after successful login
          }
        })
      );
  }

  logout(): Observable<any> {
    // First try to logout from server
    return new Observable(subscriber => {
      // Call logout API if you have one
      this.http.post(`${this.apiUrl}/logout`, {}, { headers: this.getHeaders() })
        .subscribe({
          next: (response) => {
            this.logoutLocally();
            subscriber.next(response);
            subscriber.complete();
          },
          error: (error) => {
            // Even if server logout fails, clear local data
            this.logoutLocally();
            subscriber.error(error);
          }
        });
    });
  }

  // Method to handle local cleanup
  logoutLocally(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('cartCount');
    this.userNameSubject.next('Account');
    
    // Clear any other stored user data
    // localStorage.clear(); // Use this if you want to clear all localStorage
  }

  signup(userData: any): Observable<any> {
    // Replace with your actual API endpoint
    console.log('User Data1:', userData);
    return this.http.post('http://192.168.1.140:3000/api/user/signup', userData);
  }

  getUserProfile(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}`, { headers });
  }

  updateProfile(updateData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/update`, updateData, { headers });
  }

  getOrders(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/orders`, { headers });
  }
  getAddresses(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/addresses`, { headers });
  }
  getWishlist(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/wishlist`, { headers });
  }

  removeFromWishlist(productId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/wishlist/${productId}`, { headers });
  }

  addToWishlist(productId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/wishlist/add`, { productId }, { headers });
  }
}