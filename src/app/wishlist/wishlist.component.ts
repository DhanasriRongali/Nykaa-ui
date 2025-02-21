import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-services/auth.service';
import { CartService } from '../../services/cart-services/cart.service';
import { UserSideMenuComponent } from '../user-side-menu/user-side-menu.component';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

interface WishlistItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  stock: string;
  description: string;
}

@Component({
    selector: 'app-wishlist',
    imports: [CommonModule, RouterModule, UserSideMenuComponent],
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: WishlistItem[] = [];
  isLoading = true;

  constructor(
    public authService: AuthService,
    private cartService: CartService
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
    this.cartService.closeCart();
    this.cartService.closeLoginModal();
    this.cartService.closeSignupModal();
    this.loadWishlist();
  }

  loadWishlist() {
    this.isLoading = true;
    this.authService.getWishlist().subscribe({
      next: (items: WishlistItem[]) => {
        this.wishlistItems = items;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading wishlist:', error);
        this.isLoading = false;
      }
    });
  }

  removeFromWishlist(productId: string) {
    this.authService.removeFromWishlist(productId).subscribe({
      next: () => {
        this.wishlistItems = this.wishlistItems.filter(item => item.productId !== productId);
        Notify.success('Item removed from wishlist');
      },
      error: (error) => {
        console.error('Error removing from wishlist:', error);
        Notify.failure('Failed to remove item from wishlist');
      }
    });
  }

  addToCart(productId: string) {
    const cartItem = {
      product_id: productId,
      quantity: 1
    };
    
    this.cartService.addToCart(cartItem).subscribe({
      next: () => {
        this.cartService.updateCartCount();
        this.removeFromWishlist(productId);
        Notify.success('Item added to cart');
      },
      error: (error) => {
        console.error('Error adding to cart:', error);
        Notify.failure('Failed to add item to cart');
      }
    });
  }
} 