import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemCount = new BehaviorSubject<number>(0);
  private cartVisible = new BehaviorSubject<boolean>(false);
  private apiUrl = 'http://192.168.1.140:3000/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.loadCartCount();
  }

  private loadCartCount() {
    // Get cart count from local storage or API
    const count = localStorage.getItem('cartCount');
    this.cartItemCount.next(count ? parseInt(count) : 0);
  }

  getCartCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  addToCart(productId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart/add`, { productId }, { headers: this.getHeaders() });
  }

  getCartItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cart`, { headers: this.getHeaders() });
  }

  removeFromCart(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cart/${productId}`);
  }

  updateCartCount(count: number) {
    this.cartItemCount.next(count);
    localStorage.setItem('cartCount', count.toString());
  }

  toggleCart() {
    this.cartVisible.next(!this.cartVisible.value);
  }

  isCartVisible(): Observable<boolean> {
    return this.cartVisible.asObservable();
  }

  closeCart() {
    this.cartVisible.next(false);
  }

  updateQuantity(productId: string, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/cart/update`, { 
      productId, 
      quantity 
    });
  }
} 