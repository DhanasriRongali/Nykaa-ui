import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header-services/header.service';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';
import { forkJoin } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart-services/cart.service';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { CartComponent } from '../cart/cart.component';
import { AuthService } from '../../services/auth-services/auth.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
    selector: 'app-header',
    imports: [
        CommonModule,
        RouterModule,
        CategoryMenuComponent,
        HttpClientModule,
        LoginComponent,
        SignupComponent,
        CartComponent
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainNavItems: NavItems[] = [];
  categoryItems: any[] = [];
  showCategoryMenu = false;
  showAccountMenu = false;
  cartItemCount = 0;
  selectedCategoryId: string = '';
  categoryData: { [key: string]: any } = {};
  isLoginVisible$ = this.cartService.isLoginModalVisible();
  isSignupVisible$ = this.cartService.isSignupModalVisible();
  isCartVisible$ = this.cartService.isCartVisible();
  isLoggedIn$ = this.authService.isLoggedIn();
  userName$ = this.authService.getUserName();

  constructor(
    private headerService: HeaderService,
    public cartService: CartService,
    public authService: AuthService,
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

  ngOnInit(): void {
    this.mainNavItems = this.headerService.getMainNavItems();
    
    // Load all category data at once
    this.headerService.loadAllCategoryData().subscribe(
      ({ categories, detailRequests }) => {
        this.categoryItems = categories;
        
        // When all detailed data is loaded
        detailRequests.subscribe(
          (detailedData: any[]) => {
            // Store each category's detailed data
            detailedData.forEach((data, index) => {
              const categoryId = categories[index].id;
              this.categoryData[categoryId] = data;
              this.headerService.setCategoryData(categoryId, data);
            });
          },
          (          error: any) => console.error('Error loading detailed category data:', error)
        );
      },
      error => console.error('Error loading categories:', error)
    );
    
    this.cartService.getCartCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  onCategoryHover(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.showCategoryMenu = true;
  }

  toggleLogin() {
    if (this.authService.isLoggedIn()) {
      this.authService.logoutLocally();
      Notify.success('Logged out successfully');
      window.location.reload();
    } else {
      this.cartService.toggleLoginModal();
    }
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  toggleAccountMenu() {
    this.showAccountMenu = !this.showAccountMenu;
  }

  logout() {
    this.showAccountMenu = false;
    this.authService.logoutLocally();
    Notify.success('Logged out successfully');
    this.router.navigate(['/']);
  }

  closeAccountMenu() {
    this.showAccountMenu = false;
  }

  navigateToProfile() {
    this.closeAccountMenu();
    this.router.navigate(['/profile']).then(() => {
      console.log('Navigation to profile completed');
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  navigateToOrders() {
    this.closeAccountMenu();
    this.router.navigate(['/orders']).then(() => {
      console.log('Navigation to orders completed');
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  navigateToWishlist() {
    this.closeAccountMenu();
    this.router.navigate(['/wishlist']).then(() => {
      console.log('Navigation to wishlist completed');
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }
  
}
