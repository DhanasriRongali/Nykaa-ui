import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories/${categoryId}`);
  }

  // getCategories() {
  //   return {
  //     "id": "d4170832-33ac-40be-9ca1-0dc975c32226",
  //     "name": "Makeup",
  //     "sub_category": [
  //       {
  //         "name": "Concealers",
  //         "id": "b2243b01-1ee9-4259-925c-2138d7d3ad1e",
  //         "child_sub_category": [
  //           {
  //             "name": "Liquid Concealer",
  //             "id": "11fbe4d2-6c45-473a-814a-d34e7c3dc20b"
  //           },
  //           {
  //             "name": "Stick Concealer",
  //             "id": "12bdf789-4d27-4f84-9b4a-efbc79b0978f"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Primers",
  //         "id": "80ed2a32-71f1-44b2-a93f-4d5ee9814cde",
  //         "child_sub_category": [
  //           {
  //             "name": "Hydrating Primer",
  //             "id": "21fda9b5-36d1-495e-9d2a-802356e3d2f6"
  //           },
  //           {
  //             "name": "Mattifying Primer",
  //             "id": "22e45c8b-4e3e-421e-b43b-9e33ebdf89d7"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Foundations",
  //         "id": "a2eb847a-8812-479b-8f43-a5ec0a73603f",
  //         "child_sub_category": [
  //           {
  //             "name": "Liquid Foundation",
  //             "id": "1bcbf6c9-3d7e-42fb-8a2c-1c924aee7a01"
  //           },
  //           {
  //             "name": "Powder Foundation",
  //             "id": "2df08c3a-94d1-4e98-b879-6f89d4e0c82c"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Lipsticks",
  //         "id": "d512c3f1-2a14-4dbb-b0e8-9f24e6f9b8aa",
  //         "child_sub_category": [
  //           {
  //             "name": "Matte Lipstick",
  //             "id": "32bf8e94-7c3b-41b2-9316-8a28c99c72f0"
  //           },
  //           {
  //             "name": "Liquid Lipstick",
  //             "id": "43af5d61-4b8d-4a55-bc3e-6dc46e1e7e4b"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Eyeliners",
  //         "id": "f631a9e2-3cf7-4dd7-890a-9d921f21b5e0",
  //         "child_sub_category": [
  //           {
  //             "name": "Pencil Eyeliner",
  //             "id": "54c2e1a7-645f-4a8b-809e-ec15d7fbdd9b"
  //           },
  //           {
  //             "name": "Liquid Eyeliner",
  //             "id": "65d37c09-34e6-4e23-9b87-f4b6483f3de1"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Foundations",
  //         "id": "a2eb847a-8812-479b-8f43-a5ec0a73603f",
  //         "child_sub_category": [
  //           {
  //             "name": "Liquid Foundation",
  //             "id": "1bcbf6c9-3d7e-42fb-8a2c-1c924aee7a01"
  //           },
  //           {
  //             "name": "Powder Foundation",
  //             "id": "2df08c3a-94d1-4e98-b879-6f89d4e0c82c"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Foundations",
  //         "id": "a2eb847a-8812-479b-8f43-a5ec0a73603f",
  //         "child_sub_category": [
  //           {
  //             "name": "Liquid Foundation",
  //             "id": "1bcbf6c9-3d7e-42fb-8a2c-1c924aee7a01"
  //           },
  //           {
  //             "name": "Powder Foundation",
  //             "id": "2df08c3a-94d1-4e98-b879-6f89d4e0c82c"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Foundations",
  //         "id": "a2eb847a-8812-479b-8f43-a5ec0a73603f",
  //         "child_sub_category": [
  //           {
  //             "name": "Liquid Foundation",
  //             "id": "1bcbf6c9-3d7e-42fb-8a2c-1c924aee7a01"
  //           },
  //           {
  //             "name": "Powder Foundation",
  //             "id": "2df08c3a-94d1-4e98-b879-6f89d4e0c82c"
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Foundations",
  //         "id": "a2eb847a-8812-479b-8f43-a5ec0a73603f",
  //         "child_sub_category": [
  //           {
  //             "name": "Liquid Foundation",
  //             "id": "1bcbf6c9-3d7e-42fb-8a2c-1c924aee7a01"
  //           },
  //           {
  //             "name": "Powder Foundation",
  //             "id": "2df08c3a-94d1-4e98-b879-6f89d4e0c82c"
  //           }
  //         ]
  //       },
  //     ]
  //   };
  // }
}
