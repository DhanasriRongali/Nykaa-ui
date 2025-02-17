import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/products.service';
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
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}