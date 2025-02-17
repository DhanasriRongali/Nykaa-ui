import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  hoverImage: string | undefined;
  isHovered = false;

  ngOnInit() {
    this.hoverImage = this.product.images[0]; // Default image
  }

  onMouseEnter() {
    if (this.product.images.length > 1) {
      this.hoverImage = this.product.images[1]; // Switch on hover
    }
  }

  onMouseLeave() {
    this.hoverImage = this.product.images[0]; // Reset on leave
  }
}
