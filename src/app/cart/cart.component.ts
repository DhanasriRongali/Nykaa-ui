import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cart-overlay" *ngIf="cartService.isCartVisible() | async" (click)="closeCart()">
      <div class="cart-modal" (click)="$event.stopPropagation()">
        <div class="cart-header">
          <h2>Shopping Cart</h2>
          <button class="close-btn" (click)="closeCart()">✕</button>
        </div>
        <div class="cart-content">
          <!-- Coupon Section -->
          <div class="coupon-section">
            <div class="coupon-header" (click)="toggleCoupons()">
              <h3>Available Coupons</h3>
              <span class="toggle-icon">{{ showAllCoupons ? '▼' : '▶' }}</span>
            </div>

            <div class="coupon-content" *ngIf="showAllCoupons">
              <div class="coupon-list">
                <div class="coupon-item" *ngFor="let coupon of availableCoupons">
                  <div class="coupon-details">
                    <span class="code">{{coupon.code}}</span>
                    <p class="description">{{coupon.description}}</p>
                    <p class="min-amount" *ngIf="coupon.minAmount">
                      Min order: ₹{{coupon.minAmount}}
                    </p>
                  </div>
                  <button 
                    [disabled]="!isCouponApplicable(coupon) || appliedCoupon === coupon.code"
                    (click)="applyCoupon(coupon.code)"
                    [class.applied]="appliedCoupon === coupon.code"
                  >
                    {{ appliedCoupon === coupon.code ? 'Applied' : 'Apply' }}
                  </button>
                </div>
              </div>
            </div>

            <div class="error-message" *ngIf="errorMessage">
              {{ errorMessage }}
            </div>

            <div class="applied-coupon" *ngIf="appliedCoupon">
              <div class="coupon-info">
                <span class="code">{{appliedCoupon}}</span>
                <span class="savings">Saved ₹{{discount}}</span>
              </div>
              <button class="remove-coupon" (click)="removeCoupon()">✕</button>
            </div>
          </div>

          <!-- Cart Items -->
          <div class="cart-items">
            <div *ngFor="let item of cartItems" class="cart-item">
              <img [src]="item.product.image" [alt]="item.product.name">
              <div class="item-details">
                <h3>{{ item.product.name }}</h3>
                <div class="quantity-controls">
                  <button (click)="updateQuantity(item, -1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button (click)="updateQuantity(item, 1)">+</button>
                </div>
                <p class="price">₹{{ item.product.price * item.quantity }}</p>
                <button class="remove-btn" (click)="removeItem(item.product._id)">Remove</button>
              </div>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="cart-summary" *ngIf="cartItems.length">
            <div class="summary-item">
              <span>Subtotal</span>
              <span>₹{{ getSubTotal() }}</span>
            </div>
            <div class="summary-item" *ngIf="discount > 0">
              <span>Discount</span>
              <span>-₹{{ discount }}</span>
            </div>
            <div class="summary-item">
              <span>Delivery Charges</span>
              <span>{{ deliveryCharges === 0 ? 'FREE' : '₹' + deliveryCharges }}</span>
            </div>
            <div class="summary-item total">
              <span>Total</span>
              <span>₹{{ getTotal() }}</span>
            </div>
            <button class="checkout-btn" (click)="proceedToCheckout()">Proceed to Buy</button>
          </div>
        </div>

        <div class="empty-cart" *ngIf="!cartItems.length">
          <p>Your cart is empty</p>
          <button class="continue-shopping" routerLink="/" (click)="closeCart()">Continue Shopping</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cart-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      display: flex;
      justify-content: flex-end;
      z-index: 1000;
    }

    .cart-modal {
      background: white;
      height: 100%;
      width: 100%;
      max-width: 400px;
      padding: 20px;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h2 {
        margin: 0;
        color: var(--nykaa-pink);
      }

      .close-btn {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;

        &:hover {
          color: var(--nykaa-pink);
        }
      }
    }

    .cart-content {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .coupon-section {
      padding: 12px;
      background: #f8f8f8;
      border-radius: 8px;
      margin-bottom: 15px;

      .coupon-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;

        h3 {
          margin: 0;
          font-size: 16px;
          color: #333;
        }

        span {
          cursor: pointer;
          color: var(--nykaa-pink);
          font-size: 13px;
        }
      }

      .coupon-list {
        max-height: 200px;
        overflow-y: auto;
        margin-top: 8px;
      }

      .coupon-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border: 1px dashed #ddd;
        border-radius: 4px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: white;

        &:hover {
          border-color: var(--nykaa-pink);
        }

        &.selected {
          background: #fff3f7;
          border-color: var(--nykaa-pink);
        }

        .coupon-details {
          .code {
            font-size: 14px;
            font-weight: 600;
            color: var(--nykaa-pink);
          }

          .description {
            font-size: 12px;
            color: #666;
            margin: 2px 0;
          }

          .min-amount {
            font-size: 11px;
            color: #999;
          }
        }
      }

      .error-message {
        color: #ff4444;
        font-size: 12px;
        margin-top: 5px;
        text-align: center;
      }

      .applied-coupon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        background: #fff3f7;
        border: 1px solid var(--nykaa-pink);
        border-radius: 4px;
        margin-top: 8px;

        .coupon-info {
          .code {
            font-size: 13px;
            font-weight: 600;
            color: var(--nykaa-pink);
          }

          .savings {
            font-size: 12px;
            color: #28a745;
            margin-left: 8px;
          }
        }

        .remove-coupon {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 4px;
          font-size: 16px;

          &:hover {
            color: #ff4444;
          }
        }
      }
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;

      button {
        width: 24px;
        height: 24px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        
        &:hover {
          background: #f5f5f5;
        }
      }
    }

    .cart-items {
      flex: 1;
      overflow-y: auto;
      padding: 20px 0;
    }

    .cart-item {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 15px;
      }

      .item-details {
        flex: 1;

        h3 {
          margin: 0 0 5px;
          font-size: 16px;
        }

        .price {
          color: var(--nykaa-pink);
          font-weight: bold;
          margin: 5px 0;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #666;
          padding: 5px 0;
          cursor: pointer;
          font-size: 14px;

          &:hover {
            color: var(--nykaa-pink);
          }
        }
      }
    }

    .cart-summary {
      padding: 15px;
      background: #f8f8f8;
      border-radius: 8px;

      .summary-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
        &.total {
          font-weight: 600;
          font-size: 18px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          margin-top: 10px;
        }
      }
    }

    .empty-cart {
      text-align: center;
      padding: 40px 0;

      p {
        color: #666;
        margin-bottom: 20px;
      }

      .continue-shopping {
        padding: 10px 20px;
        background: var(--nykaa-pink);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
          background: darken(#fc2779, 5%);
        }
      }
    }
  `]
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