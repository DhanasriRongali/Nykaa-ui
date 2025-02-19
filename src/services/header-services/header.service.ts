import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { NavItems } from '../../types/header.types';
import { environment } from '../../environments/environment';

interface CategoryData {
  id: string;
  name: string;
  sub_category?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiUrl = environment.apiUrl;
  private categoryData: { [key: string]: CategoryData } = {};

  constructor(private http: HttpClient) { }

  getMainNavItems(): NavItems[] {
    return [
      { "nav-name": "Categories", "nav-link": "#" },
      { "nav-name": "Brands", "nav-link": "#" },
      { "nav-name": "Luxe", "nav-link": "#" },
      { "nav-name": "Nykaa Fashion", "nav-link": "#" },
      { "nav-name": "Beauty Fashion", "nav-link": "#" }
    ];
  }

  loadAllCategoryData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`).pipe(
      map(categories => {
        const categoryRequests = categories.map(category =>
          this.http.get<CategoryData>(`${this.apiUrl}/categories/${category.id}`)
        );
        return {
          categories,
          detailRequests: forkJoin(categoryRequests)
        };
      })
    );
  }

  getCategoryItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }

  getCategoryById(categoryId: string): CategoryData | null {
    return this.categoryData[categoryId] || null;
  }

  setCategoryData(categoryId: string, data: CategoryData) {
    this.categoryData[categoryId] = data;
  }
}
