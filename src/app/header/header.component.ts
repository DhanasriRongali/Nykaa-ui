import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { LoginModalService } from '../../services/login-modal.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CategoryMenuComponent,
    CartComponent,
    LoginComponent,
    SignupComponent
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

  constructor(
    private headerService: HeaderService,
    private cartService: CartService,
    private loginModalService: LoginModalService
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

  toggleAccountMenu() {
    this.loginModalService.toggleLogin();
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
