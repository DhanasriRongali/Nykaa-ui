import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth-services/auth.service';
import { environment } from '../../environments/environment';

interface CartItem {
  product_id: string;
  quantity: number;
}

interface CheckoutResponse {
  orderId: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;
  private cartItemCount = new BehaviorSubject<number>(0);
  private cartVisible = new BehaviorSubject<boolean>(false);
  private loginModalVisible = new BehaviorSubject<boolean>(false);
  private signupModalVisible = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.updateCartCount();
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  addToCart(item: CartItem): Observable<any> {
    return this.http.post(`${this.apiUrl}/items`, item, { headers: this.getHeaders() });
  }

  getCartItems(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  removeFromCart(cartItemId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    
    console.log('Removing cart item with ID:', cartItemId);
    
    return this.http.delete(`${this.apiUrl}/items/${cartItemId}`, { 
      headers,
      observe: 'response'
    });
  }

  updateCartCount() {
    if (this.authService.isLoggedIn()) {
      this.getCartItems().subscribe({
        next: (items) => {
          this.cartItemCount.next(items.length);
        },
        error: (error) => {
          console.error('Error updating cart count:', error);
          this.cartItemCount.next(0);
        }
      });
    } else {
      this.cartItemCount.next(0);
    }
  }

  getCartCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  toggleCart() {
    this.cartVisible.next(!this.cartVisible.value);
    this.loginModalVisible.next(false);
    this.signupModalVisible.next(false);
  }

  isCartVisible(): Observable<boolean> {
    return this.cartVisible.asObservable();
  }

  closeCart() {
    this.cartVisible.next(false);
  }

  updateQuantity(cartItemId: string, quantity: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.put(`${this.apiUrl}/items/${cartItemId}`, { quantity }, { headers });
  }

  toggleLoginModal() {
    this.loginModalVisible.next(!this.loginModalVisible.value);
    this.signupModalVisible.next(false);
    this.cartVisible.next(false);
  }

  isLoginModalVisible(): Observable<boolean> {
    return this.loginModalVisible.asObservable();
  }

  closeLoginModal() {
    this.loginModalVisible.next(false);
  }

  toggleSignupModal() {
    this.signupModalVisible.next(!this.signupModalVisible.value);
    this.loginModalVisible.next(false);
    this.cartVisible.next(false);
  }

  isSignupModalVisible(): Observable<boolean> {
    return this.signupModalVisible.asObservable();
  }

  closeSignupModal() {
    this.signupModalVisible.next(false);
  }

  loadCartCount() {
    const count = localStorage.getItem('cartCount');
    this.cartItemCount.next(count ? parseInt(count) : 0);
  }

  checkout(): Observable<CheckoutResponse> {
    return this.http.post<CheckoutResponse>(`${environment.apiUrl}/orders`, {}, {
      headers: this.getHeaders()
    });
  }
} 