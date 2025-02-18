import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product/product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products/:brandId', component: ProductPageComponent },
  { path: '**', redirectTo: '' }
]; 