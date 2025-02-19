import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-services/auth.service';
import { CartService } from '../../services/cart-services/cart.service';

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
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: WishlistItem[] = [];
  isLoading = true;

  constructor(
    public authService: AuthService,
    private cartService: CartService
  ) {}

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
      },
      error: (error) => {
        console.error('Error removing from wishlist:', error);
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
        this.cartService.getCartItems().subscribe({
          next: (response) => {
            this.cartService.updateCartCount();
            this.removeFromWishlist(productId);
          },
          error: (error) => {
            console.error('Error getting cart items:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error adding to cart:', error);
      }
    });
  }
} 