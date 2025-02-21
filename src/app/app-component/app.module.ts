import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component'; // Corrected import path
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { ProductFeatureModule } from '../product-feature/product-feature.module';
import { ProductPageComponent } from '../product/product-page/product-page.component';
import { ProductCardComponent } from '../product/product-card/product-card.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductPageComponent,
    ProductCardComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }