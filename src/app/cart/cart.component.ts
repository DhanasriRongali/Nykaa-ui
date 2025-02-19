import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  discount = 0;
  deliveryCharges = 0;
  isVisible = false;
  appliedCoupon: string | null = null;
  showAllCoupons = false;
  errorMessage = '';
  availableCoupons = [
    { 
      code: 'FIRST50', 
      description: '50% off on your first order',
      discount: 0.5,
      minAmount: 0
    },
    { 
      code: 'SAVE20', 
      description: '20% off on orders above ₹999',
      discount: 0.2,
      minAmount: 999
    },
    {
      code: 'FLAT100',
      description: 'Flat ₹100 off on orders above ₹500',
      discount: 100,
      minAmount: 500,
      type: 'flat'
    }
  ];

  constructor(
    public cartService: CartService,
    // private router: Router
  ) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe({
      next: (items) => {
        this.cartItems = items;
        this.cartService.updateCartCount(items.length);
      },
      error: (error) => console.error('Error loading cart:', error)
    });
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId).subscribe({
      next: () => this.loadCartItems(),
      error: (error) => console.error('Error removing item:', error)
    });
  }

  getSubTotal(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0);
  }

  getTotal(): number {
    return this.getSubTotal() - this.discount + this.deliveryCharges;
  }

  updateQuantity(item: any, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      item.quantity = newQuantity;
      // Update in backend
      this.cartService.updateQuantity(item.product._id, newQuantity).subscribe();
    }
  }

  toggleCoupons() {
    this.showAllCoupons = !this.showAllCoupons;
  }

  applyCoupon(code: string) {
    const coupon = this.availableCoupons.find(c => c.code === code);
    const subtotal = this.getSubTotal();

    if (coupon && subtotal >= coupon.minAmount) {
      this.appliedCoupon = code;
      if (coupon.type === 'flat') {
        this.discount = coupon.discount;
      } else {
        this.discount = subtotal * coupon.discount;
      }
      this.showAllCoupons = false; // Hide coupons after applying
    } else {
      this.errorMessage = `Minimum order amount of ₹${coupon?.minAmount} required`;
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.discount = 0;
  }

  isCouponApplicable(coupon: any): boolean {
    return this.getSubTotal() >= coupon.minAmount;
  }

  closeCart() {
    this.cartService.closeCart();
  }

  proceedToCheckout() {
    this.closeCart();
  }
} 