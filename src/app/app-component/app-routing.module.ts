import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product/product-page/product-page.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { CartComponent } from '../cart/cart.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },  // Redirect root to login
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  // },
  { path: '', component: HomeComponent },
  { path: 'products/:brandId', component: ProductPageComponent },
  // { path: '**', redirectTo: 'auth/login' }  // Redirect unknown paths to login
  // {path: 'login', component: LoginComponent},
  // { path: 'signup', component: SignupComponent },
  // { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // enableTracing for debugging
  exports: [RouterModule]
})
export class AppRoutingModule { } 