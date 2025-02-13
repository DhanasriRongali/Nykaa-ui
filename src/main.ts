import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { OfferCardsComponent } from './app/home/hard_to_resist_deals/hard_to_resist_deals.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, OfferCardsComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-offer-cards></app-offer-cards>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App);