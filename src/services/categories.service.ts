// category.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories() {
    return [
      {
        name: 'Face',
        subcategories: [
          { name: 'Face Primer' },
          { name: 'Concealer' },
          { name: 'Foundation' }
        ]
      },
      {
        name: 'Eyes',
        subcategories: [
          { name: 'Kajal' },
          { name: 'Eyeliner' },
          { name: 'Mascara' }
        ]
      },
      {
        name: 'Lips',
        subcategories: [
          { name: 'Lipstick' },
          { name: 'Lip Gloss' },
          { name: 'Lip Liner' }
        ]
      }
    ];
  }
}
