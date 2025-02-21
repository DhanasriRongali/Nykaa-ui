import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrateLoveSavingsService } from '../../../services/home-services/celeberate-love-&-savings.service';

@Component({
    selector: 'app-celebrate-love-carousel-cards',
    imports: [CommonModule],
    templateUrl: './celeberate-love-&-savings.component.html',
    styleUrls: ['./celeberate-love-&-savings.component.css'],
    providers: [CelebrateLoveSavingsService]
})
export class CelebrateLoveCarouselCardsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  titleImage: { imageUrl: string, offerText1: string, navLink: string, offerText2: string } | undefined;
  cards: { imageUrl: string, offerText1: string, navLink: string, offerText2: string }[] = [];

  translateX = 0;
  currentIndex = 0;
  cardWidth = 0;
  cardsPerView = 4;

  constructor(private savingsService: CelebrateLoveSavingsService) {}

  get dots() {
    return Array(Math.ceil(this.cards.length / this.cardsPerView)).fill(0);
  }

  ngAfterViewInit() {
    const allCards = this.savingsService.getCards();
    this.titleImage = allCards[0];
    this.cards = allCards.slice(1);
    this.updateCardWidth();
    window.addEventListener('resize', this.updateCardWidth.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateCardWidth.bind(this));
  }

  updateCardWidth() {
    const width = this.carouselWrapper.nativeElement.offsetWidth;
    if (width <= 480) {
      this.cardsPerView = 1;
    } else if (width <= 768) {
      this.cardsPerView = 2;
    } else if (width <= 1024) {
      this.cardsPerView = 3;
    } else {
      this.cardsPerView = 4;
    }
    this.cardWidth = width / this.cardsPerView;
    this.goToSlide(this.currentIndex);
  }

  next() {
    const maxIndex = Math.ceil(this.cards.length / this.cardsPerView) - 1;
    this.currentIndex = this.currentIndex >= maxIndex ? 0 : this.currentIndex + 1;
    this.updateTranslateX();
  }

  previous() {
    const maxIndex = Math.ceil(this.cards.length / this.cardsPerView) - 1;
    this.currentIndex = this.currentIndex <= 0 ? maxIndex : this.currentIndex - 1;
    this.updateTranslateX();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTranslateX();
  }

  private updateTranslateX() {
    this.translateX = -this.currentIndex * (this.cardWidth * this.cardsPerView);
  }

  get showPrevButton() {
    return this.currentIndex > 0;
  }

  get showNextButton() {
    const maxIndex = Math.ceil(this.cards.length / this.cardsPerView) - 1;
    return this.currentIndex < maxIndex;
  }
}