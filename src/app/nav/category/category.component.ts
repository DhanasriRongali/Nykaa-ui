import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-category-menu',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryMenuComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }
}