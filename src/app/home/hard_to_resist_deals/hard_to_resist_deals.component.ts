import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardToResistDealsService } from '../../../services/hard_to_resist_deals.service';

@Component({
  selector: 'app-offer-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hard_to_resist_deals.component.html',
  styleUrls: ['./hard_to_resist_deals.component.css'],
  providers: [HardToResistDealsService]
})
export class OfferCardsComponent implements OnInit {
  cards: { navLink: string, imageUrl: string, caption: string, offerText: string }[] = [];

  constructor(private dealsService: HardToResistDealsService) {}

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
}