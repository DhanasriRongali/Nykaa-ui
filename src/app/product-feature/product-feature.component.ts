import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../types/product.types';
import { ProductService } from '../../services/product-services/products.service';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';

@Component({
    imports: [
        CommonModule,
        OverviewComponent,
        DetailsComponent,
        FeedbackComponent
    ],
    selector: 'app-product-feature',
    templateUrl: './product-feature.component.html',
    styleUrls: ['./product-feature.component.css']
})
export class ProductFeatureComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
        console.log(this.product);
      });
    });
  }
}
