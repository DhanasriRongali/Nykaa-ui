import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterBoxComponent } from '../filter-box/filter-box.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../types/product.types';

@Component({
    selector: 'app-product-page',
    standalone: true,
    imports: [
        CommonModule, 
        FilterBoxComponent, 
        ProductGridComponent,
        HttpClientModule
    ],
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
    products: Product[] = [];

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const brandId = params['brandId'];
            if (brandId) {
                this.productService.getProductsByBrand(brandId).subscribe(
                    (products) => {
                        this.products = products;
                    }
                );
            }
        });
    }
}
