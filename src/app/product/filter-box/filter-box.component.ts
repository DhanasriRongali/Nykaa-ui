import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-filter-box',
    imports: [CommonModule],
    templateUrl: './filter-box.component.html',
    styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent {
  filters = [
    {
      name: 'Price',
      isOpen: false,
      options: ['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', 'Above ₹2000']
    },
    {
      name: 'Category',
      isOpen: false,
      options: ['Makeup', 'Skincare', 'Haircare', 'Fragrances']
    },
    {
      name: 'Discount',
      isOpen: false,
      options: ['10% and above', '20% and above', '30% and above', '50% and above']
    },
    {
      name: 'Avg Customer Rating',
      isOpen: false,
      options: ['4 Stars & Above', '3 Stars & Above', '2 Stars & Above']
    },
    {
      name: 'Color',
      isOpen: false,
      options: ['Red', 'Pink', 'Nude', 'Brown', 'Black']
    },
    {
      name: 'Preference',
      isOpen: false,
      options: ['Cruelty Free', 'Vegan', 'Natural', 'Organic']
    },
    {
      name: 'Formulation',
      isOpen: false,
      options: ['Liquid', 'Cream', 'Powder', 'Gel']
    },
    {
      name: 'Country Of Origin',
      isOpen: false,
      options: ['India', 'USA', 'Korea', 'Japan']
    },
    {
      name: 'Gender',
      isOpen: false,
      options: ['Women', 'Men', 'Unisex']
    },
    {
      name: 'Finish',
      isOpen: false,
      options: ['Matte', 'Dewy', 'Glossy', 'Metallic']
    },
    {
      name: 'Concern',
      isOpen: false,
      options: ['Acne', 'Aging', 'Dryness', 'Dullness']
    },
    {
      name: 'Skin Type',
      isOpen: false,
      options: ['Normal', 'Dry', 'Oily', 'Combination']
    },
    {
      name: 'Ingredient',
      isOpen: false,
      options: ['Retinol', 'Vitamin C', 'Hyaluronic Acid', 'Niacinamide']
    },
    {
      name: 'Coverage',
      isOpen: false,
      options: ['Light', 'Medium', 'Full']
    },
    {
      name: 'Skin Tone',
      isOpen: false,
      options: ['Fair', 'Medium', 'Deep', 'Dark']
    }
  ];
}