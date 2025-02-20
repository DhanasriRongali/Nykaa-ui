// product-feature/overview/overview.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Offer, Product } from '../../../types/product.types';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth-services/auth.service';
import { CartService } from '../../../services/cart-services/cart.service';
import { ToastService } from '../../../services/toast-services/toast.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, AuthService, CartService, ToastService],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private toastService: ToastService
  ) {}
  @Input() name!: string;
  @Input() images: string[] = [];
  @Input() price?: number;
  @Input() badge?: string;
  @Input() offer?: Offer;
  @Input() product!: Product;

  selectedImage: string = '';

  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
  }

  getDisplayImage(): string {
    return this.selectedImage || this.images[0] || '';
  }

  getOtherImages(): string[] {
    if (!this.images || this.images.length <= 1) return [];
    return this.images;
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  addToCart(event: Event) {
    event.stopPropagation();
    console.log('Add to Cart clicked');
    if (!this.authService.isLoggedIn()) {
      this.toastService.showError('Please login to add items to cart');
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
        this.toastService.showSuccess('Product added to cart successfully');
        this.cartService.updateCartCount();
      },
      error: (error) => {
        console.error('Add to Cart Error:', error);
        this.toastService.showError(error.message || 'Failed to add product to cart');
      }
    });
  }

}
