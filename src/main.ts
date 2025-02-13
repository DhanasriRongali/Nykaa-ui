import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { OfferCardsComponent } from './app/home/hard_to_resist_deals/hard_to_resist_deals.component';
import { FooterComponent } from './app/footer/footer.component';
import { BannerAndOffersCarouselComponent } from './app/home/banner-and-offers-carousel/banner-and-offers-carousel.component';
import { GiftStoreComponent } from './app/home/gift-store/gift-store.component';
import { FlashSalesComponent } from './app/home/flash-sales/flash-sales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerAndOffersCarouselComponent, GiftStoreComponent, FlashSalesComponent, OfferCardsComponent],
  template: `
    <app-header></app-header>
    <app-banner-and-offers-carousel></app-banner-and-offers-carousel>
    <app-gift-store></app-gift-store>
    <app-flash-sales></app-flash-sales>
    <app-offer-cards></app-offer-cards>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App);