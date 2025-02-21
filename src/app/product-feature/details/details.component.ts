import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Brand, Category } from '../../../types/product.types';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() description?: string | '';
  @Input() stock?: number;
  @Input() brand: Brand = { id: '', name: '' };
  @Input() category: Category = { id: '', name: '' };
  @Input() subCategoryId: string = '';
  @Input() childSubCategoryId: string = '';
  @Input() originalPrice?: number;
  @Input() createdAt: string = '';

  constructor(private sanitizer: DomSanitizer) {}
}
