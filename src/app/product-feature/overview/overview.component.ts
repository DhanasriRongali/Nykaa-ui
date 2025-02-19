// product-feature/overview/overview.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../../types/product.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() name!: string;
  @Input() images: string[] = [];
  @Input() price?: number;
  @Input() badge?: string;
  @Input() offer?: Offer;

  selectedImage: string = '';

  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
  }

  getDisplayImage(): string {
    return this.selectedImage || this.images[0] || '';
  }

  getOtherImages(): string[] {
    if (!this.images || this.images.length <= 1) return [];
    return this.images;
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
