import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Provides this service at the root level
})
export class ImageService {
  private images = [
    { id: 1, url: "https://images-static.nykaa.com/uploads/d4e78653-74c4-44f9-b8de-d8f408cbd25c.jpg?tr=cm-pad_resize,w-1200", navLink: "#" },
    { id: 2, url: "https://images-static.nykaa.com/uploads/bb915073-8ac9-423f-a00e-7e933a10f313.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 3, url: "https://images-static.nykaa.com/uploads/a8f99034-88a0-4482-b2db-85ac02614385.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 4, url: "https://images-static.nykaa.com/uploads/01b7aa26-2355-4ced-8a6e-550a8e7a140b.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 5, url: "https://images-static.nykaa.com/uploads/66b4a775-7739-4d0b-a946-a54682ddc803.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 6, url: "https://images-static.nykaa.com/uploads/60fd2b16-126c-4c70-9e35-dbc71cb690d3.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 7, url: "https://images-static.nykaa.com/uploads/4f91d084-f542-4a61-8440-79fc4bcce94b.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 8, url: "https://images-static.nykaa.com/uploads/2c64b026-1547-4985-b987-560c66da8da0.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 9, url: "https://images-static.nykaa.com/uploads/8d24ecef-fdf3-4e83-acdb-cba680e0df4c.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
    { id: 10, url: "https://images-static.nykaa.com/uploads/2f8733ee-a683-4121-8c6e-0420f34e2cd0.jpg?tr=cm-pad_resize,w-200", navLink: "#" },
  ];

  constructor() {}

  getImages() {
    return this.images;
  }
}
