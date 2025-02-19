import { Injectable } from '@angular/core';
import { BeautyStealImage } from '../../types/beauty-steal.types';

export interface BeautyStealsData {
    images: BeautyStealImage[];
}

@Injectable({
    providedIn: 'root'
})
export class SangTheseBeautyStealsService {
    private beautyStealsData: BeautyStealsData = {
        images: [
            {
                "id": "1",
                "titleImage": "https://images-static.nykaa.com/uploads/fd0ac20a-75fb-4991-a124-4c07bb058933.jpg?tr=cm-pad_resize,w-1200"
            },
            {
                "id": "2",
                "offerText": "Up To 20% Off",
                "offerDescription": "Minis on ₹1500",
                "displayImage": "https://images-static.nykaa.com/uploads/22058c19-197f-4b63-bb88-0a11ab043180.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "3",
                "offerText": "Up To 60% Off",
                "offerDescription": "Free Serum on ₹999+",
                "displayImage": "https://images-static.nykaa.com/uploads/a71680c4-afec-412d-a05c-bf1a43fc5e37.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "4",
                "offerText": "Up To 40% Off",
                "offerDescription": "Extra 10% Off On ₹599*",
                "displayImage": "https://images-static.nykaa.com/uploads/fbb21118-d50d-4073-bc5a-1bf8ea759ed2.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "5",
                "offerText": "Up To 50% Off",
                "offerDescription": "Buy 2 Get 2 On Sheet Masks",
                "displayImage": "https://images-static.nykaa.com/uploads/78e5e045-51d0-4c6b-89e9-32ae94ff357d.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "6",
                "offerText": "Bestsellers",
                "offerDescription": "Starting from ₹600",
                "displayImage": "https://images-static.nykaa.com/uploads/c9ed7b90-b9b4-428c-8fa8-5878eebbf72b.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "7",
                "offerText": "Up To 35% Off",
                "offerDescription": "2 Minis Free On ₹499+",
                "displayImage": "https://images-static.nykaa.com/uploads/678e644c-b635-4060-acb6-417fed2a8eb0.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "8",
                "offerText": "Up To 20% Off",
                "offerDescription": "On Entire Range",
                "displayImage": "https://images-static.nykaa.com/uploads/e01ba8a9-7e47-4812-a283-4ea753127a1e.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "9",
                "offerText": "Up To 3% Off",
                "offerDescription": "2 Minis Free On ₹449+.",
                "displayImage": "https://images-static.nykaa.com/uploads/502dc266-4317-4936-8e13-9afbab54c4ef.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "10",
                "offerText": "Buy 1 Get 1 Free",
                "offerDescription": "Limited Time Offer!",
                "displayImage": "https://images-static.nykaa.com/uploads/46ade111-c78d-4e75-b8a2-1eb120bc5085.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "11",
                "offerText": "Free Bestsellers",
                "offerDescription": "On Orders ₹1500+",
                "displayImage": "https://images-static.nykaa.com/uploads/d6132dea-5d5f-4ed3-a546-32365a47ec5c.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "12",
                "offerText": "2 Minis On ₹2600",
                "offerDescription": "10% Off On ₹4000",
                "displayImage": "https://images-static.nykaa.com/uploads/0684b6e2-097a-444f-9898-b6b6b8351eb7.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "13",
                "offerText": "Up To 40% Off",
                "offerDescription": "On Entire Brand",
                "displayImage": "https://images-static.nykaa.com/uploads/5a1d28db-63b5-4b03-9e27-e777d54eefc5.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "14",
                "offerText": "Min 15% Off",
                "offerDescription": "On Bestsellers",
                "displayImage": "https://images-static.nykaa.com/uploads/216cf63b-d534-4acd-8042-ddb6819a2eb6.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "15",
                "offerText": "Up To 50% off",
                "offerDescription": "Buy 3 Get on Sheet Masks",
                "displayImage": "https://images-static.nykaa.com/uploads/db30110e-f493-44d9-b396-b621f8fbbaaa.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "16",
                "offerText": "Up To 20% Off",
                "offerDescription": "Minis On ₹1500",
                "titleImage": "https://images-static.nykaa.com/uploads/fd0ac20a-75fb-4991-a124-4c07bb058933.jpg?tr=cm-pad_resize,w-1200",
            }
        ]
    };

    constructor() { }

    getBeautyStealsData(): BeautyStealsData {
        return this.beautyStealsData;
    }
}