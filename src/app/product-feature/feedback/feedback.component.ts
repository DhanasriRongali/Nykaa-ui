import { Component, Input } from '@angular/core';
import { Ratings } from '../../../types/product.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  @Input() rating?: Ratings;

  // Return sorted keys for the rating breakdown (e.g. 5,4,3,2,1)
  getRatingKeys(ratingCount: { [key: string]: number } | undefined): string[] {
    if (!ratingCount) return [];
    return Object.keys(ratingCount).sort((a, b) => +b - +a);
  }

  getProgressWidth(key: string): number {
    if (!this.rating?.rating_count || !this.rating?.count) return 0;
    return (this.rating.rating_count[key] / this.rating.count) * 100;
  }

  getAverageRating(): string {
    return this.rating?.average_rating?.toFixed(1) || '0.0';
  }

  getTotalRatings(): number {
    return this.rating?.count || 0;
  }
}
