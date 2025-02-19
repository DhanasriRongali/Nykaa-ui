import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BeautyToFallForService {

    private beautyToFallForData = {
        images: [
            {
                titleImage: "https://images-static.nykaa.com/uploads/90722269-0bef-446f-8b2e-faa858215b95.jpg?tr=cm-pad_resize,w-1200",
                id: "1"
            },
            {
                id: "2",
                displayImage: "https://images-static.nykaa.com/uploads/3ff90005-b3a8-4c6b-a525-bb567b5658cf.png?tr=cm-pad_resize,w-300"
            },
            {
                id: "3",
                displayImage: "https://images-static.nykaa.com/uploads/4fe84ec3-efa8-457e-ba97-deebbdb23b0a.png?tr=cm-pad_resize,w-300"
            },
            {
                id: "4",
                displayImage: "https://images-static.nykaa.com/uploads/504befb2-43b6-49b6-9044-2122ad6ec28f.png?tr=cm-pad_resize,w-300"
            }
        ]
    };

    getBeautyToFallForImages(): Observable<any> {
        return of(this.beautyToFallForData);
    }
}