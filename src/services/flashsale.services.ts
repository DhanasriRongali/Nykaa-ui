import { Injectable } from '@angular/core';
import { FlashSaleImage } from '../types/flash-sales.types';

@Injectable({
    providedIn: 'root'
})
export class FlashSalesService {
    private images: FlashSaleImage[] = [
        {
            id: 1,
            bannerImage:
                'https://images-static.nykaa.com/uploads/1d03c6ba-eccf-477b-9385-3829d1c8f7aa.jpg?tr=cm-pad_resize,w-1200'
        },
        {
            id: 2,
            gif:
                'https://images-static.nykaa.com/uploads/477e71d9-2442-412c-9f31-b25c19f8d528.gif',
            gifText: ''
        },
        {
            id: 3,
            gif:
                'https://images-static.nykaa.com/uploads/21be2784-d1ae-4196-9f5b-81bbab76c83e.gif',
            gifText: ''
        }
    ];

    constructor() { }

    getImages(): FlashSaleImage[] {
        return this.images;
    }
}