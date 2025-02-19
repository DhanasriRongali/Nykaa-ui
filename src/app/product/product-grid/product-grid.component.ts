import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product-services/products.service';
import { Product } from '../../../types/product.types';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Only fetch products if none were passed in
    if (this.products.length === 0) {
      this.productService.getProducts().subscribe((data) => {
        this.products = data.products;
      });
    }
  }
}