import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Order, OrderItem } from '../../types/order.types'; // Assuming you have a types file for Order
import { AuthService } from '../../services/auth-services/auth.service'; // Import the AuthService

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private authService: AuthService // Inject the AuthService
  ) {
    console.log('apiUrl', this.apiUrl); // Log the apiUrl in the constructor
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/order`, { headers: this.getHeaders() }).pipe(
      switchMap((orders: any[]) => {
        const orderObservables: Observable<Order>[] = orders.map(order => {
          const itemObservables: Observable<OrderItem>[] = order.order_item.map((item: any) => 
            this.getProductById(item.product_id).pipe(
              map(product => ({
                productId: item.product_id,
                quantity: item.quantity,
                price: item.price,
                name: product.name,
                image: product.image
              }))
            )
          );
          return forkJoin(itemObservables).pipe(
            map((items: OrderItem[]) => ({
              orderId: order.id,
              date: order.created_at,
              status: order.status,
              total: order.total_amount,
              items: items,
              shippingAddress: {
                street: order.user_address?.street || '',
                city: order.user_address?.city || '',
                state: order.user_address?.state || '',
                pincode: order.user_address?.postal_code || '' // Correct field name from API response
              },
              
              // ✅ Add missing properties
              paymentMethod: order.payment_method || '', 
              transactionId: order.transaction_id || '', 
              subtotal: order.subtotal || 0, 
              tax: order.tax || 0 
            }))
          );
        });
        return forkJoin(orderObservables);
      })
    );
  }
  
  getOrderById(orderId: string): Observable<Order> {
    return this.http.get<any>(`${this.apiUrl}/order/${orderId}`, { headers: this.getHeaders() }).pipe(
      switchMap(order => {
        const itemObservables: Observable<OrderItem>[] = order.order_item.map((item: any) => 
          this.getProductById(item.product_id).pipe(
            map(product => ({
              productId: item.product_id,
              quantity: item.quantity,
              price: item.price,
              name: product.name,
              image: product.images[0]
            }))
          )
        );
        return forkJoin(itemObservables).pipe(
          map((items: OrderItem[]) => ({
            orderId: order.id,
            date: order.created_at,
            status: order.status,
            total: order.total_amount,
            items: items,
            shippingAddress: {
              street: order.user_address?.street || '',
              city: order.user_address?.city || '',
              state: order.user_address?.state || '',
              pincode: order.user_address?.postal_code || ''
            },
            // ✅ Add missing properties
            paymentMethod: order.payment_method || '', 
            transactionId: order.transaction_id || '', 
            subtotal: order.subtotal || 0, 
            tax: order.tax || 0 
          }))
        );
      })
    );
  }
  

  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
  }

  // Other order-related methods can be added here...
}