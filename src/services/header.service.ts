import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavItems } from '../types/header.types';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private apiUrl = 'http://192.168.1.140:3000/api';

    constructor(private http: HttpClient) { }

    getMainNavItems(): NavItems[] {
        console.log('getMainNavItems function called...');
        return [
            { "nav-name": "Categories", "nav-link": "#" },
            { "nav-name": "Brands", "nav-link": "#" },
            { "nav-name": "Luxe", "nav-link": "#" },
            { "nav-name": "Nykaa Fashion", "nav-link": "#" },
            { "nav-name": "Beauty Fashion", "nav-link": "#" }
        ];
    }

    getCategoryItems(): Observable<any[]> {
        console.log('getCategoryItems function called...');
        return this.http.get<any[]>(`${this.apiUrl}/categories`);
    }
}
