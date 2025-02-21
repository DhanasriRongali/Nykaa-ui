import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerOffersService, Url } from '../../../services/home-services/banner.service';

declare var bootstrap: any;

@Component({
    selector: 'app-banner-and-offers-carousel',
    imports: [CommonModule],
    templateUrl: './banner-and-offers-carousel.component.html',
    styleUrls: ['./banner-and-offers-carousel.component.css']
})
export class BannerAndOffersCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('offersCarousel') carouselElement!: ElementRef;

  bannerUrl!: Url;
  offersUrls: Url[] = [];

  constructor(private bannerOffersService: BannerOffersService) { }

  ngOnInit(): void {
    this.bannerUrl = this.bannerOffersService.getBannerUrl();
    this.offersUrls = this.bannerOffersService.getOffersUrls();
  }

  ngAfterViewInit(): void {
    new bootstrap.Carousel(this.carouselElement.nativeElement, {
      interval: 1000, 
      wrap: true    
    });
  }
}
