import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../../types/product.types';
import { environment } from '../../environments/environment';

const dummyMakeupProducts: Product[] = [
  {
    id: "mk-001",
    name: "MAC Retro Matte Lipstick - Ruby Woo",
    original_price: 22.00,
    price: 19.50,
    images: [
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/d/cd880fbMACXX00001503_1.jpg",
      "https://example.com/images/mac-ruby-woo-2.jpg"
    ],
    rating: {
      count: 2458,
      average_rating: 4.8
    },
    custom_props: {
      offer: {
        name: "Buy 2 Get 1 Free",
        image: "https://example.com/offers/mac-offer.jpg"
      }
    },
    badge: "Bestseller",
    created_at: "2023-01-15T10:00:00Z",
    updated_at: "2024-03-20T08:30:00Z"
  },
  {
    id: "mk-002",
    name: "Fenty Beauty Pro Filt'r Foundation",
    original_price: 39.00,
    price: 39.00,
    images: [
      "https://example.com/images/fenty-foundation-1.jpg",
      "https://example.com/images/fenty-foundation-2.jpg"
    ],
    rating: {
      count: 3256,
      average_rating: 4.7
    },
    custom_props: {},
    created_at: "2023-03-20T09:00:00Z"
  },
  {
    id: "mk-003",
    name: "Charlotte Tilbury Airbrush Flawless Setting Powder",
    original_price: 45.00,
    price: 38.25,
    images: [
      "https://example.com/images/ct-powder-1.jpg",
      "https://example.com/images/ct-powder-2.jpg"
    ],
    rating: {
      count: 1875,
      average_rating: 4.9
    },
    custom_props: {
      offer: {
        name: "15% Off Limited Time",
      }
    },
    badge: "New",
    created_at: "2024-01-10T11:30:00Z",
    updated_at: "2024-03-15T14:20:00Z"
  },
  {
    id: "mk-004",
    name: "NARS Radiant Creamy Concealer",
    original_price: 32.00,
    price: 32.00,
    images: [
      "https://example.com/images/nars-concealer-1.jpg",
      "https://example.com/images/nars-concealer-2.jpg"
    ],
    rating: {
      count: 4521,
      average_rating: 4.6
    },
    custom_props: {},
    created_at: "2023-06-05T08:45:00Z",
    updated_at: "2024-02-28T16:15:00Z"
  },
  {
    id: "mk-005",
    name: "Rare Beauty Soft Pinch Liquid Blush",
    original_price: 23.00,
    price: 20.70,
    images: [
      "https://example.com/images/rare-blush-1.jpg",
      "https://example.com/images/rare-blush-2.jpg"
    ],
    rating: {
      count: 2890,
      average_rating: 4.8
    },
    custom_props: {
      offer: {
        name: "10% Off for Members",
      }
    },
    badge: "Trending",
    created_at: "2023-09-12T13:20:00Z",
    updated_at: "2024-03-18T09:45:00Z"
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ products: Product[]; total: number }> {
    return of({ products: dummyMakeupProducts, total: dummyMakeupProducts.length });
  }

  getProductsByBrand(brandId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/by-brand?brand_id=${brandId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching products by brand:', error);
        return of([]);
      })
    );
  }

  getProductById(productId: string): Observable<Product | null> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching product by ID:', error);
        return of(null);
      })
    );
  }

  formatPrice(price: number): string {
    return `₹${price.toFixed(2)}`;
  }
}