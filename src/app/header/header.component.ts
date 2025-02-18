import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { LoginModalService } from '../../services/login-modal.service';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';

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
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainNavItems: NavItems[] = [];
  categoryItems: NavItems[]  = [];
  showCategoryMenu = false;
  showAccountMenu = false;
  cartItemCount = 0;

  constructor(
    private headerService: HeaderService,
    private cartService: CartService,
    private loginModalService: LoginModalService
  ) { }

  ngOnInit(): void {
    this.mainNavItems = this.headerService.getMainNavItems();
    this.categoryItems = this.headerService.getCategoryItems();
    
    this.cartService.getCartCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  toggleAccountMenu() {
    this.loginModalService.toggleLogin();
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
