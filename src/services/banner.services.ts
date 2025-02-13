import { Injectable } from '@angular/core';

export type Url = string;

@Injectable({
    providedIn: 'root'
})
export class BannerOffersService {
    private bannerUrl: Url = 'https://images-static.nykaa.com/uploads/162bc1f9-c1ee-40ba-a858-e08f64c93c40.gif';
    private offersUrls: Url[] = [
        'https://images-static.nykaa.com/uploads/217a294c-e933-42ed-be1e-90c05084b31a.jpg?tr=cm-pad_resize,w-1200',
        'https://images-static.nykaa.com/uploads/7e6ee39e-f5e8-40ed-813f-768cbfc8a82d.jpg?tr=cm-pad_resize,w-1200'
    ];

    constructor() { }

    getBannerUrl(): Url {
        return this.bannerUrl;
    }

    getOffersUrls(): Url[] {
        return this.offersUrls;
    }
}
