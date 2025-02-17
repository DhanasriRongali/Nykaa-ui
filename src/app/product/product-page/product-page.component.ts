import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from '../filter-box/filter-box.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';

@Component({
    selector: 'app-product-page',
    standalone: true,
    imports: [CommonModule, FilterBoxComponent, ProductGridComponent],
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent { }
