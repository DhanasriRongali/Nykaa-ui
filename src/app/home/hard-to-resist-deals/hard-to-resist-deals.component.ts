import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardToResistDealsService } from '../../../services/hard-to-resist-deals.service';
import { ProductService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hard-to-resist-deals.component.html',
  styleUrls: ['./hard-to-resist-deals.component.css'],
  providers: [HardToResistDealsService]
})
export class OfferCardsComponent implements OnInit {
  cards: { 
    navLink: string, 
    imageUrl: string, 
    caption: string, 
    offerText: string,
    brandId: string 
  }[] = [];
  
  constructor(
    private dealsService: HardToResistDealsService,
    private productsService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const allCards = this.dealsService.getCards();
    const headerCard = allCards[0];
    const shuffledCards = this.shuffleArray(allCards.slice(1));
    this.cards = [headerCard, ...shuffledCards];
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getProductsByBrand(brandId: string) {
    this.productsService.getProductsByBrand(brandId).subscribe((products) => {
      console.log(products);
    });
  }

  onCardClick(brandId: string) {
    this.router.navigate(['/products', brandId]);
  }
}