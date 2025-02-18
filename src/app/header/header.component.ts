import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';
import { HttpClientModule } from '@angular/common/http';

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
