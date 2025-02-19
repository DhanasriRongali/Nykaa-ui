import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() description?: string;
  @Input() stock?: number;
  @Input() brandId?: string;
  @Input() categoryId?: string;
  @Input() subCategoryId?: string;
  @Input() childSubCategoryId?: string;
  @Input() originalPrice?: number;
  @Input() createdAt!: string;
}
