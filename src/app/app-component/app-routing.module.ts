import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product/product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:brandId', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 