import { Injectable } from '@angular/core';
import { BeautyStealImage } from '../types/beauty-steal.types';

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
                "titleImage": "https://images-static.nykaa.com/uploads/fd0ac20a-75fb-4991-a124-4c07bb058933.jpg?tr=cm-pad_resize,w-1200",
                "id": "1"
            },
            {
                "id": "2",
                "displayImage": "https://images-static.nykaa.com/uploads/a71680c4-afec-412d-a05c-bf1a43fc5e37.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "3",
                "displayImage": "https://images-static.nykaa.com/uploads/fbb21118-d50d-4073-bc5a-1bf8ea759ed2.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "4",
                "displayImage": "https://images-static.nykaa.com/uploads/78e5e045-51d0-4c6b-89e9-32ae94ff357d.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "5",
                "displayImage": "https://images-static.nykaa.com/uploads/c9ed7b90-b9b4-428c-8fa8-5878eebbf72b.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "6",
                "displayImage": "https://images-static.nykaa.com/uploads/678e644c-b635-4060-acb6-417fed2a8eb0.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "7",
                "displayImage": "https://images-static.nykaa.com/uploads/e01ba8a9-7e47-4812-a283-4ea753127a1e.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "8",
                "displayImage": "https://images-static.nykaa.com/uploads/502dc266-4317-4936-8e13-9afbab54c4ef.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "9",
                "displayImage": "https://images-static.nykaa.com/uploads/46ade111-c78d-4e75-b8a2-1eb120bc5085.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "10",
                "displayImage": "https://images-static.nykaa.com/uploads/d6132dea-5d5f-4ed3-a546-32365a47ec5c.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "11",
                "displayImage": "https://images-static.nykaa.com/uploads/0684b6e2-097a-444f-9898-b6b6b8351eb7.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "12",
                "displayImage": "https://images-static.nykaa.com/uploads/5a1d28db-63b5-4b03-9e27-e777d54eefc5.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "13",
                "displayImage": "https://images-static.nykaa.com/uploads/216cf63b-d534-4acd-8042-ddb6819a2eb6.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "14",
                "displayImage": "https://images-static.nykaa.com/uploads/db30110e-f493-44d9-b396-b621f8fbbaaa.jpg?tr=cm-pad_resize,w-200"
            },
            {
                "id": "15",
                "displayImage": "https://images-static.nykaa.com/uploads/22058c19-197f-4b63-bb88-0a11ab043180.jpg?tr=cm-pad_resize,w-200"
            }
        ]
    };

    constructor() { }

    /**
     * Returns the JSON data containing all the images.
     */
    getBeautyStealsData(): BeautyStealsData {
        return this.beautyStealsData;
    }
}