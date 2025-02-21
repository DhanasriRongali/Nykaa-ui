import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { OrderService } from '../../services/order-services/order.service';
import { CartService } from '../../services/cart-services/cart.service';
import { AuthService } from '../../services/auth-services/auth.service'; // Import the AuthService
import { Order } from '../../types/order.types'; // Import the Order interface
import { OrderDetailsComponent } from '../order-details/order-details.component'; // Import the OrderDetailsComponent
import { UserSideMenuComponent } from '../user-side-menu/user-side-menu.component';

@Component({
    selector: 'app-orders',
    imports: [CommonModule, RouterModule, OrderDetailsComponent, UserSideMenuComponent],
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder!: Order;
  isLoading = true;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private cartService: CartService,
    public authService: AuthService // Make the AuthService public
  ) {}

  ngOnInit() {
    this.cartService.closeCart();
    this.cartService.closeLoginModal();
    this.cartService.closeSignupModal();
    this.loadOrders();
  }

  loadOrders() {
    this.isLoading = true;
    this.orderService.getOrders().subscribe({
      next: (orders: Order[]) => {
        this.orders = orders;
        console.log('Loaded Orders:', this.orders); // Console log the orders
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading orders:', error);
        this.isLoading = false;
      }
    });
  }

  getOrderStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'status-delivered';
      case 'shipped':
        return 'status-shipped';
      case 'processing':
        return 'status-processing';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }

  logout() {
    this.authService.logout();
  }

  // constructor(private orderService: OrderService, private router: Router) {}

selectOrder(orderId: string) {
  this.isLoading = true;
  this.orderService.getOrderById(orderId).subscribe({
    next: (order: Order) => {
      this.selectedOrder = order;
      console.log('Selected Order:', this.selectedOrder); // Debugging log
      this.isLoading = false;
      
      // ✅ Navigate to OrderDetailsComponent with orderId
      this.router.navigate(['/order-details', orderId]);
    },
    error: (error) => {
      console.error('Error loading order:', error);
      this.isLoading = false;
    }
  });
}

}