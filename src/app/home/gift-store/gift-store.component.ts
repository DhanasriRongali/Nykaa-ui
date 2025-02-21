import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/home-services/giftstore.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gift-store',
    imports: [CommonModule],
    templateUrl: './gift-store.component.html',
    styleUrls: ['./gift-store.component.css']
})
export class GiftStoreComponent {
  images: string[] = [];
  translateX: number = 0;
  currentSlide: number = 0;
  itemsPerSlide = 6;

  constructor(private imageService: ImageService) { }
  
  ngOnInit(): void {
    // Assuming the service returns an Observable<string[]>
    this.imageService.getImages().subscribe((data: string[]) => {
      this.images = data;
    });
  }


  next(): void {
    const maxSlide = Math.ceil(this.images.length / this.itemsPerSlide) - 1;
    if (this.currentSlide < maxSlide) {
      this.currentSlide++;
      this.translateX = -100 * this.currentSlide;
    }
  }

  prev(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.translateX = -100 * this.currentSlide;
    }
  }
}
