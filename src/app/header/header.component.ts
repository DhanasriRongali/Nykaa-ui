import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    CategoryMenuComponent,
    HttpClientModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainNavItems: NavItems[] = [];
  categoryItems: any[] = [];
  showCategoryMenu = false;
  selectedCategoryId: string = '';

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.mainNavItems = this.headerService.getMainNavItems();
    this.headerService.getCategoryItems().subscribe(
      (categories) => {
        this.categoryItems = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onCategoryHover(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.showCategoryMenu = true;
  }
}
