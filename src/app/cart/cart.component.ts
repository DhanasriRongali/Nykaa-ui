import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

interface CheckoutResponse {
  orderId: string;
  message: string;
}

@Component({
    selector: 'app-cart',
    imports: [CommonModule, RouterModule],
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartItemId: string | null = null;
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
  isLoading = false;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {
    Notify.init({
      position: 'right-bottom',
      timeout: 3000,
      cssAnimation: true,
      cssAnimationDuration: 400,
      cssAnimationStyle: 'fade',
      success: {
        background: '#28a745',
      },
      failure: {
        background: '#dc3545',
      }
    });
  }

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.isLoading = true;
    console.log('Loading cart items...');
    
    this.cartService.getCartItems().subscribe({
      next: (response) => {
        console.log('Cart items response:', response);
        this.cartItems = response;
        
        // Store the first cart item's ID if available
        if (this.cartItems.length > 0) {
          this.cartItemId = this.cartItems[0].id;
          console.log('Stored cart item ID:', this.cartItemId);
        }

        // Log detailed cart information
        const cartSummary = {
          itemCount: this.cartItems.length,
          items: this.cartItems.map(item => ({
            cartItemId: item.id, // Log the cart item ID
            productId: item.product._id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            subtotal: item.product.price * item.quantity
          })),
          subtotal: this.getSubTotal(),
          total: this.getTotal()
        };
        
        console.log('Cart Summary:', cartSummary);
        
        this.cartService.updateCartCount();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading cart:', error);
        Notify.failure('Failed to load cart items');
        this.isLoading = false;
      }
    });
  }

  removeItem(cartItemId: string) {
    console.log('Attempting to remove cart item:', cartItemId);
    
    if (!cartItemId) {
      console.error('Invalid cart item ID');
      Notify.failure('Cannot remove item: Invalid cart item ID');
      return;
    }

    // Find the item to be removed for logging
    const itemToRemove = this.cartItems.find(item => item.id === cartItemId);
    console.log('Item to be removed:', itemToRemove);

    this.cartService.removeFromCart(cartItemId).subscribe({
      next: (response) => {
        console.log('Remove item response:', response);
        Notify.success('Item removed from cart');
        this.loadCartItems(); // Refresh the cart
      },
      error: (error) => {
        console.error('Error removing item:', error);
        Notify.failure('Failed to remove item from cart');
      }
    });
  }

  updateQuantity(cartItemId: string, newQuantity: number) {
    // If new quantity would be 0 or less, remove the item
    if (newQuantity < 1) {
      this.removeItem(cartItemId);
      return;
    }

    console.log('Updating quantity:', {
      cartItemId,
      newQuantity,
      currentItem: this.cartItems.find(item => item.id === cartItemId)
    });

    this.cartService.updateQuantity(cartItemId, newQuantity).subscribe({
      next: (response) => {
        console.log('Update quantity response:', response);
        this.loadCartItems();
        Notify.success('Quantity updated successfully');
      },
      error: (error) => {
        console.error('Error updating quantity:', error);
        Notify.failure('Failed to update quantity');
      }
    });
  }

  getSubTotal(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0);
  }

  getTotal(): number {
    return this.getSubTotal() - this.discount + this.deliveryCharges;
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
    if (this.cartItems.length === 0) {
      Notify.failure('Your cart is empty');
      return;
    }
    this.closeCart();
  }

  checkout() {
    this.cartService.checkout().subscribe({
      next: (response: CheckoutResponse) => {
        Notify.success('Order placed successfully');
        this.router.navigate(['/orders']);
      },
      error: (error: Error) => {
        console.error('Checkout error:', error);
        Notify.failure('Checkout failed');
      }
    });
  }
} 