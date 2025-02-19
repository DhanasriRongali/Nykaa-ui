import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryService } from '../../../services/header-services/categories.service';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../../services/header-services/header.service';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryMenuComponent implements OnInit, OnChanges {
  @Input() categoryId: string = '';
  categories: any = {};
  categoriesPerColumn = 3;
  columnCount = 0;
  columnArray: number[] = [];

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    if (this.categoryId) {
      this.loadCategoryData();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryId'] && changes['categoryId'].currentValue) {
      this.loadCategoryData();
    }
  }

  private loadCategoryData() {
    const categoryData = this.headerService.getCategoryById(this.categoryId);
    if (categoryData) {
      this.categories = categoryData;
      this.columnCount = Math.ceil(this.categories.sub_category?.length / this.categoriesPerColumn);
      this.columnArray = Array(this.columnCount).fill(0).map((_, i) => i);
    }
  }

  getCategoriesForColumn(columnIndex: number): any[] {
    const start = columnIndex * this.categoriesPerColumn;
    const end = start + this.categoriesPerColumn;
    return this.categories.sub_category?.slice(start, end) || [];
  }
}