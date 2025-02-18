import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAndOffersCarouselComponent } from './banner-and-offers-carousel/banner-and-offers-carousel.component';
import { GiftStoreComponent } from './gift-store/gift-store.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { CelebrateLoveCarouselCardsComponent } from './celeberate-love-&-savings/celeberate-love-&-savings.component';
import { OfferCardsComponent } from './hard-to-resist-deals/hard-to-resist-deals.component';
import { SangTheseBeautyStealsComponent } from './sang-these-beauty-steals/sang-these-beauty-steals.component';
import { BeautyToFallForComponent } from './beauty-to-fall-for/beauty-to-fall-for.component';
import { CupidApprovedOffersComponent } from './cupid-approved-offers/cupid-approved-offers.component';
import { ImageGridComponent } from './global-brands-to-love/global-brands-to-love.component';
import { InfluencerStoresComponent } from './influencer-stores/influencer-stores.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerAndOffersCarouselComponent,
    GiftStoreComponent,
    FlashSalesComponent,
    CelebrateLoveCarouselCardsComponent,
    OfferCardsComponent,
    SangTheseBeautyStealsComponent,
    BeautyToFallForComponent,
    CupidApprovedOffersComponent,
    ImageGridComponent,
    InfluencerStoresComponent
  ],
  template: `
    <app-banner-and-offers-carousel></app-banner-and-offers-carousel>
    <app-gift-store></app-gift-store>
    <app-flash-sales></app-flash-sales>
    <app-celebrate-love-carousel-cards></app-celebrate-love-carousel-cards>
    <app-offer-cards></app-offer-cards>
    <app-sang-these-beauty-steals></app-sang-these-beauty-steals>
    <app-beauty-to-fall-for></app-beauty-to-fall-for>
    <app-cupid-approved-offers></app-cupid-approved-offers>
    <app-image-grid></app-image-grid>
    <app-influencer-stores></app-influencer-stores>
  `
})
export class HomeComponent { } 