import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// If you need to fetch from an API, uncomment the next lines:
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    // Uncomment the constructor if using HttpClient for API calls.
    // constructor(private http: HttpClient) { }

    constructor() { }

    getImages(): Observable<string[]> {
        // Static array of image URLs
        const images: string[] = [
            "https://images-static.nykaa.com/uploads/f601c0aa-87a6-4c32-b3b4-0a1cefa56d7a.gif",
            "https://images-static.nykaa.com/uploads/8d8db856-c423-44a9-9cec-6f231648d299.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/badd6e54-d15f-4ca8-892a-037585316548.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/f0da76af-9fb1-4457-8c0a-f67e03456e24.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/297b99ee-2ff3-4297-9cf4-de71d241a22b.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/84d90cd2-1cb8-4cfd-9cea-9d2ef7c5d2f9.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/ea0a078d-bb95-4a13-9c53-63453e34d02f.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/469ff7ba-eafc-4daf-8391-1304b863aed3.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/264a7541-72bc-4131-872a-e15903448355.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/44b739ac-69b6-42f9-b149-ebc32a075059.jpg?tr=cm-pad_resize,w-200",
            "https://images-static.nykaa.com/uploads/2af40766-0b7b-4961-88c5-e411d246d856.jpg?tr=cm-pad_resize,w-200"
        ];

        // Return the static array wrapped in an Observable.
        return of(images);

        // If you need to call an API endpoint, you could do something like:
        // return this.http.get<{ images: string[] }>('https://your-api-endpoint.com/api/images')
        //   .pipe(map(response => response.images));
    }
}
