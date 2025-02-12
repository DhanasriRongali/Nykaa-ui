import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { NavItems } from '../../types/header.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainNavItems: NavItems[] = [];
  categoryItems: NavItems[]  = [];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.mainNavItems = this.headerService.getMainNavItems();
    this.categoryItems = this.headerService.getCategoryItems();
  }
}
