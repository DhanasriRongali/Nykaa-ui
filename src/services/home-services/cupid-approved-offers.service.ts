import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CupidApprovedOffersService {
    private cupidApprovedOffersData = {
        "images": [
            {
                "id": "1",
                "titleImage": "https://images-static.nykaa.com/uploads/c86bd5ac-dbfa-4b32-8aa0-1331385745d0.jpg?tr=cm-pad_resize,w-1200"
            },
            {
                "id": "2",
                "offerText": "Up To 40% off",
                "displayImage": "https://images-static.nykaa.com/uploads/a0c5088a-b3b6-4751-b53b-6240210d07f6.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "3",
                "offerText": "Flat 60% Off",
                "displayImage": "https://images-static.nykaa.com/uploads/c0375dc1-4de0-447a-bf26-9572b96ada02.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "4",
                "offerText": "Up To 40% Off",
                "displayImage": "https://images-static.nykaa.com/uploads/e7694818-fdb8-45af-bcd3-92b4493c3eef.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "5",
                "offerText": "Viral Cushion Foundation",
                "displayImage": "https://images-static.nykaa.com/uploads/5429e009-4618-44e9-8e66-36161926bfaa.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "6",
                "offerText": "Up To 50% off",
                "displayImage": "https://images-static.nykaa.com/uploads/86df5a46-8706-4886-92cb-d8b6a9c49238.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "7",
                "offerText": "Starting At ₹799",
                "displayImage": "https://images-static.nykaa.com/uploads/0f4e06dd-b1fd-480d-b120-1b192d649a63.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "8",
                "offerText": "Min 20% Off",
                "displayImage": "https://images-static.nykaa.com/uploads/d2158624-3a9e-4b74-8399-b8ec06250834.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "9",
                "offerText": "Flat 20% Off",
                "displayImage": "https://images-static.nykaa.com/uploads/859f1eb9-eb00-40a4-9e02-090dcacd9024.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "10",
                "offerText": "Miminum 50% off",
                "displayImage": "https://images-static.nykaa.com/uploads/78db32b9-f9ee-4344-ac18-0482e9506985.jpg?tr=cm-pad_resize,w-200"
            }
        ]
    };

    getCupidApprovedOffers(): Observable<any> {
        return of(this.cupidApprovedOffersData);
    }
}