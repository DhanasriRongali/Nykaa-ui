import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/products.service';
import { Product } from '../types/product.types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<Product[]> {
    constructor(private productService: ProductService) { }

    resolve(): Observable<Product[]> {
        return this.productService.getProducts().pipe(map(data => data.products));
    }
}
