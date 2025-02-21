import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product/product-page/product-page.component';
import { ProductFeatureComponent } from '../product-feature/product-feature.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { CartComponent } from '../cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { OrdersComponent } from '../orders/orders.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { AddressesComponent } from '../addresses/addresses.component';

@Component({
    selector: 'app-test',
    template: '<h1>Test</h1>',
    standalone: false
})
export class TestComponent {}

export const routes: Routes = [
  { path: 'products/:brandId', component: ProductPageComponent },
  { path: 'product/:id', component: ProductFeatureComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details/:orderId', component: OrderDetailsComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
