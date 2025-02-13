import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CelebrateLoveSavingsService {
  private cards = [
    { 
        imageUrl: 'https://images-static.nykaa.com/uploads/8be51eb9-ea12-4c5b-883d-fe8df939e2f6.jpg?tr=cm-pad_resize,w-1200', 
        offerText1: '',
        navLink: '#',
        offerText2: ''
      },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/c3ce19d1-2b8d-4c19-9cde-a688e9b31cc1.jpg?tr=cm-pad_resize,w-500', 
      offerText1: 'Up To 50% Off',
      navLink: '#',
      offerText2: 'Luxury Fragrances'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/dc72c2ac-ee42-4651-88d3-8fa99dce724b.jpg?tr=cm-pad_resize,w-500', 
      offerText1: 'Starting At ₹799',
      navLink: '#',
      offerText2: 'Collagen Supplements'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/e6582225-b6e8-4e17-8760-8a2772d748ec.jpg?tr=cm-pad_resize,w-500', 
      offerText1: 'Up To 40% Off',
      navLink: '#',
      offerText2: 'Topselling Serums'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/408b0ad0-8d59-4560-bf59-6061ad1f6ec9.jpg?tr=cm-pad_resize,w-500', 
      offerText1: 'Min 40% Off',
      navLink: '#',
      offerText2: 'V-Day-Approved Scents'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/bc623064-75aa-4d40-a01b-6799d4f9bf43.jpg?tr=cm-pad_resize,w-750', 
      offerText1: 'Up To 30% Off',
      navLink: '#',
      offerText2: 'Hair Heroes'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/eeb94135-77be-4b6e-bd09-218c643b9863.jpg?tr=cm-pad_resize,w-750', 
      offerText1: 'Up To 50% Off',
      navLink: '#',
      offerText2: 'Bestselling Makeup'
    },
    
  ];

  getCards() {
    return this.cards;
  }
}
