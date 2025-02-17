import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';
import { CategoryMenuComponent } from '../nav/category/category.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CategoryMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainNavItems: NavItems[] = [];
  categoryItems: NavItems[]  = [];
  showCategoryMenu = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.mainNavItems = this.headerService.getMainNavItems();
    this.categoryItems = this.headerService.getCategoryItems();
  }
}
