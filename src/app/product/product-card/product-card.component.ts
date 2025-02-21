import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart-services/cart.service';
import { AuthService } from '../../../services/auth-services/auth.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Product } from '../../../types/product.types';

@Component({
    imports: [CommonModule],
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  hoverImage: string | undefined;
  isHovered = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
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
    this.hoverImage = this.product.images[0]; // Default image
  }

  addToCart(event: Event) {
    event.stopPropagation();
    console.log('Add to Cart clicked');
    if (!this.authService.isLoggedIn()) {
      Notify.failure('Please login to add items to cart');
      return;
    }

    const cartItem = {
      product_id: this.product.id,
      quantity: 1
    };

    console.log('Cart Item:', cartItem);

    this.cartService.addToCart(cartItem).subscribe({
      next: (response) => {
        console.log('Add to Cart Response:', response);
        Notify.success('Product added to cart successfully');
        this.cartService.updateCartCount();
      },
      error: (error) => {
        console.error('Add to Cart Error:', error);
        Notify.failure(error.message || 'Failed to add product to cart');
      }
    });
  }

  onMouseEnter() {
    this.isHovered = true;
    if (this.product.images.length > 1) {
      this.hoverImage = this.product.images[1]; // Switch on hover
    }
  }

  onMouseLeave() {
    this.isHovered = false;
    this.hoverImage = this.product.images[0]; // Reset on leave
  }

  navigateToProduct() {
    this.router.navigate(['/product', this.product.id]);
  }
}
