import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() description?: string | HTMLPreElement;
  @Input() stock?: number;
  @Input() brandId: string = '';
  @Input() categoryId: string = '';
  @Input() subCategoryId: string = '';
  @Input() childSubCategoryId: string = '';
  @Input() originalPrice?: number;
  @Input() createdAt: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedDescription(): SafeHtml {
    if (typeof this.description === 'string') {
      return this.sanitizer.bypassSecurityTrustHtml(this.description);
    } else if (this.description instanceof HTMLPreElement) {
      return this.sanitizer.bypassSecurityTrustHtml(this.description.innerHTML);
    }
    return '';
  }
}
