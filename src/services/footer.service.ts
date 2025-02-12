import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  getInfoSectionLinks() {
    return [
      { name: 'What Are We?', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Authenticity', url: '#' },
      { name: 'Press', url: '#' },
      { name: 'Testimonials', url: '#' },
      { name: 'Nykaa CSR', url: '#' },
      { name: 'Responsible Disclosure', url: '#' },
      { name: 'Investor Relations', url: '#' },
    ];
  }

  getHelpLinks() {
    return [
      { name: 'Contact Us', url: '#' },
      { name: 'FAQs', url: '#' },
      { name: 'Store Locator', url: '#' },
      { name: 'Cancellation & Return', url: '#' },
      { name: 'Shipping & Delivery', url: '#' },
      { name: 'Sell on Nykaa', url: '#' },
    ];
  }

  getInspireMeLinks() {
    return [
      { name: 'Beauty Book', url: '#' },
      { name: 'Nykaa Network', url: '#' },
      { name: 'Buying Guides', url: '#' },
    ];
  }

  getQuickLinks() {
    return [
      { name: 'Offer Zone', url: '#' },
      { name: 'New Launches', url: '#' },
      { name: 'Nykaa Men', url: '#' },
      { name: 'Nykaa Fashion', url: '#' },
      { name: 'Nykaa Pro', url: '#' },
      { name: 'Sitemap', url: '#' },
    ];
  }

  getTopCategoriesLinks() {
    return [
      { name: 'Makeup', url: '#' },
      { name: 'Skin', url: '#' },
      { name: 'Hair', url: '#' },
      { name: 'Bath & Body', url: '#' },
      { name: 'Appliances', url: '#' },
      { name: 'Mom & Baby', url: '#' },
      { name: 'Health & Wellness', url: '#' },
      { name: 'Fragrance', url: '#' },
      { name: 'Natural', url: '#' },
      { name: 'Luxe', url: '#' },
    ];
  }

  getPopularLinks() {
    return [
      { name: 'lipstick', url: '#' },
      { name: 'highlighter', url: '#' },
      { name: 'hair serum', url: '#' },
      { name: 'concealer', url: '#' },
      { name: 'face mask', url: '#' },
      { name: 'perfume', url: '#' },
      { name: 'toner', url: '#' },
      { name: 'eyeliner', url: '#' },
      { name: 'mascara', url: '#' },
      { name: 'sunscreen', url: '#' },
      { name: 'foundation', url: '#' },
      { name: 'Olaplex', url: '#' },
      { name: 'body mist', url: '#' },
      { name: 'Huda Beauty', url: '#' },
      { name: 'Cetaphil Face Wash', url: '#' },
      { name: 'Garnier Face Wash', url: '#' },
      { name: 'Neutrogena Sunscreen', url: '#' },
    ];
  }
}
