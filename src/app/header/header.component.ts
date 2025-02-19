import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';
import { forkJoin } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { CartComponent } from '../cart/cart.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
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
  showAccountMenu = false;

  constructor(
    private headerService: HeaderService,
    public cartService: CartService,
    public authService: AuthService
  ) { }

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
      this.authService.logout();
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
    this.authService.logout();
    this.showAccountMenu = false;
    window.location.reload();
  }

  closeAccountMenu() {
    this.showAccountMenu = false;
  }
}
