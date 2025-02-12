import { Injectable } from '@angular/core';
import { NavItems } from '../types/header.types';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    constructor() { }

    getMainNavItems(): NavItems[] {
        console.log('getMainNavItems function called...');
        return [
            { "nav-name": "Brands", "nav-link": "#" },
            { "nav-name": "Luxe", "nav-link": "#" },
            { "nav-name": "Nykaa Fashion", "nav-link": "#" },
            { "nav-name": "Beauty Fashion", "nav-link": "#" }
        ];
    }

    getCategoryItems(): NavItems[] {
        console.log('getCategoryItems function called...');
        return [
            { "nav-name": "Makeup", "nav-link": "#" },
            { "nav-name": "Skincare", "nav-link": "#" },
            { "nav-name": "Hair", "nav-link": "#" },
            { "nav-name": "Appliances", "nav-link": "#" },
            { "nav-name": "Bath & Body", "nav-link": "#" },
            { "nav-name": "Natural", "nav-link": "#" },
            { "nav-name": "Mom & Baby", "nav-link": "#" },
            { "nav-name": "Fragrance", "nav-link": "#" },
            { "nav-name": "Men", "nav-link": "#" }
        ];
    }
}
