import { Component, OnInit } from '@angular/core';
import { SangTheseBeautyStealsService } from '../../../services/home-services/sang-these-beauty-steals.service';
import { CommonModule } from '@angular/common';
import { BeautyStealImage } from '../../../types/beauty-steal.types';

@Component({
    selector: 'app-sang-these-beauty-steals',
    imports: [CommonModule],
    templateUrl: './sang-these-beauty-steals.component.html',
    styleUrls: ['./sang-these-beauty-steals.component.css']
})
export class SangTheseBeautyStealsComponent implements OnInit {
  titleImage: BeautyStealImage | undefined;
  displayImages: BeautyStealImage[] = [];

  constructor(private beautyStealsService: SangTheseBeautyStealsService) { }

  ngOnInit(): void {
    const data = this.beautyStealsService.getBeautyStealsData();

    if (data.images.length > 0) {
      const titleImageData = data.images.find(img => img.titleImage);
      this.titleImage = titleImageData;
      // console.log('titleImage', this.titleImage);

      this.displayImages = data.images.filter(img => img.displayImage)
        .map(img => ({
          id: img.id,
          displayImage: img.displayImage!,
          offerText: img.offerText!,
          offerDescription: img.offerDescription!
        }));
    }
  }
}