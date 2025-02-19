import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardToResistDealsService {
  private cards = [
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/1f1269e9-1abf-492a-be11-4d415bbeb8bc.jpg?tr=cm-pad_resize,w-1200',
      caption: '',
      navLink: '#',
      offerText: '',
      brandId: '1'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/688bdfb3-ef2a-4143-b5aa-4236cb4f7b9e.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 30% Off On Entire Range',
      navLink: 'products/9a21500b-5958-4a4a-8292-0d44ac8eb567',
      offerText: 'Limited Time Offer',
      brandId: '9a21500b-5958-4a4a-8292-0d44ac8eb567'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/c80d666f-36c6-4fd8-9049-cb244924d0e2.jpg?tr=cm-pad_resize,w-300',
      caption: 'Flat 15% Off',
      navLink: 'products/0fae0bde-3ed2-4c8b-94f5-bb1fad6c6a79',
      offerText: 'On Bestsellers',
      brandId: '0fae0bde-3ed2-4c8b-94f5-bb1fad6c6a79'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/e067046d-b159-4058-89a8-09bd8d976326.jpg?tr=cm-pad_resize,w-450',
      caption: 'Up To 50% Off',
      navLink: 'products/e8f1a118-514e-476f-95e5-0df9c25282ec',
      offerText: 'Extra 10% Off On ₹699*',
      brandId: 'e8f1a118-514e-476f-95e5-0df9c25282ec'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/be357a32-6887-4d78-aa1c-8b35aa67487c.jpg?tr=cm-pad_resize,w-450',
      caption: 'Up To 20% Off',
      navLink: 'products/4cb2b3b0-3848-4377-ba18-3666c0fea63f',
      offerText: 'Free Gift On ₹1259+',
      brandId: '4cb2b3b0-3848-4377-ba18-3666c0fea63f'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/bab1391e-64d4-4f06-88d4-0234d92a4ecb.jpg?tr=cm-pad_resize,w-450',
      caption: 'Up To 25% Off',
      navLink: 'products/3dc3f2b9-8bd5-452e-9c70-b327df206d69',
      offerText: 'Pick A Mini On ₹799',
      brandId: '3dc3f2b9-8bd5-452e-9c70-b327df206d69'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/f4dda988-1b0f-4fd8-a296-25f9330ed64b.jpg?tr=cm-pad_resize,w-450',
      caption: 'Up To 30% Off',
      navLink: 'products/d14d951b-d8dd-4db7-b5ff-1558800a0e88',
      offerText: 'Extra 10% Off On ₹499*',
      brandId: 'd14d951b-d8dd-4db7-b5ff-1558800a0e88'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/ecac92e3-03b9-4632-9526-179d532ab24e.jpg?tr=cm-pad_resize,w-300',
      caption: 'Min. 10% Off',
      navLink: 'products/31afdffb-381e-461c-a1ef-3875b4a13507',
      offerText: 'Free Gifts On All Orders',
      brandId: '31afdffb-381e-461c-a1ef-3875b4a13507'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/0b8ca148-cc78-44ca-8334-9789b55ea327.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 40% Off',
      navLink: 'products/24128ac6-0e2a-49b0-93b7-72919a22c21c',
      offerText: 'On Bestsellers',
      brandId: '24128ac6-0e2a-49b0-93b7-72919a22c21c'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/171ece0e-ef6d-4348-a41c-f05876fa5147.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 40% Off',
      navLink: 'products/c5694758-47f9-4b07-b5fd-483c9f144816',
      offerText: 'Extra 10% Off On ₹599*',
      brandId: 'c5694758-47f9-4b07-b5fd-483c9f144816'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/7b6d9fac-0ad2-401c-bd27-fceada75ccc2.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 35% Off',
      navLink: 'products/6c49502f-5b9c-4f74-8620-301b391ec390',
      offerText: 'Free Gifts Worth ₹899+',
      brandId: '6c49502f-5b9c-4f74-8620-301b391ec390'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/236a8bcb-e45f-448a-bd46-d9a598d661a2.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 40% Off',
      navLink: 'products/824f293e-9608-4b96-b7bd-b0fda29f7ebc',
      offerText: 'Extra 10% Off On ₹599*',
      brandId: '824f293e-9608-4b96-b7bd-b0fda29f7ebc'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/c71e3891-7e73-4ae6-a53f-ef8921861846.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 30% Off',
      navLink: 'products/01046942-c1ff-475e-8e8b-910d815398be',
      offerText: 'Free Gift On ₹1199+',
      brandId: '01046942-c1ff-475e-8e8b-910d815398be'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/4c911616-70ff-4f1a-a79f-cb7e709398c7.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 30% Off',
      navLink: 'products/73171f24-cc58-4526-8159-810f56b1c1dc',
      offerText: 'Cleanser On ₹399',
      brandId: '73171f24-cc58-4526-8159-810f56b1c1dc'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/55fa68e8-dfa1-4172-8c05-5691017f031d.jpg?tr=cm-pad_resize,w-300',
      caption: 'Gift Worth ₹1200',
      navLink: 'products/a987f5e2-43e2-4773-9c7f-3eef85de6fed',
      offerText: 'On Order above ₹3999',
      brandId: 'a987f5e2-43e2-4773-9c7f-3eef85de6fed'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/8c5e906c-ccd3-4567-bece-e7d3c92ff6fb.jpg?tr=cm-pad_resize,w-300',
      caption: 'Min. 25% Off*',
      navLink: 'products/07d2ccd6-fa84-4769-8e43-9aed8fdd34d3',
      offerText: 'Free Gift On ₹329+',
      brandId: '07d2ccd6-fa84-4769-8e43-9aed8fdd34d3'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/063ae8aa-e43f-4bb6-8bb8-2423db6a1837.jpg?tr=cm-pad_resize,w-300',
      caption: 'Flat 25% Off*',
      offerText: 'Free Mini On ₹2000',
      brandId: 'f57a8ce2-1c28-49c3-85c9-9ef411517224',
      navLink: 'products/f57a8ce2-1c28-49c3-85c9-9ef411517224',
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/79d02e80-52de-4f94-a3c2-a93fe9b3d3cc.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 40% Off',
      navLink: 'products/b7e47489-6621-4ae5-9f49-ac1340eb7448',
      offerText: 'Extra 10% Off On ₹599*',
      brandId: '07d2ccd6-fa84-4769-8e43-9aed8fdd34d3'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/6acdebee-8b74-4768-ac8e-86e25427030a.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 40% Off',
      navLink: 'products/b7e47489-6621-4ae5-9f49-ac1340eb7448',
      offerText: 'Extra 10% Off On ₹699*',
      brandId: 'b7e47489-6621-4ae5-9f49-ac1340eb7448'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/5f9d56c7-52b8-4f45-8574-8b3a80e1a52c.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 25% Off',
      navLink: 'products/07d2ccd6-fa84-4769-8e43-9aed8fdd34d3',
      offerText: 'On Iconic Makeup',
      brandId: '07d2ccd6-fa84-4769-8e43-9aed8fdd34d3'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/0f6cee8a-5575-407a-823e-0da35d312c53.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 35% Off',
      navLink: 'products/ef05c4cb-5ce7-44c2-838b-9d09edfe1e69',
      offerText: 'Free Serum On ₹499+',
      brandId: 'ef05c4cb-5ce7-44c2-838b-9d09edfe1e69'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/6e764c73-d5bb-481b-a145-26fcd7fc98c1.jpg?tr=cm-pad_resize,w-300',
      caption: 'Up To 40% Off',
      navLink: 'products/53d141f0-30f8-464b-8802-c9217a7cc513',
      offerText: 'Free Bestseller On ₹599+',
      brandId: '53d141f0-30f8-464b-8802-c9217a7cc513'
    },
    {
      imageUrl: 'https://images-static.nykaa.com/uploads/22dfa845-ec18-4c9c-8036-95d792d5b721.jpg?tr=cm-pad_resize,w-300',
      caption: 'Buy 2 & Get Free',
      navLink: 'products/333a1e4d-0adb-499d-a59b-19fdfd182d48',
      offerText: 'Hair Travel Kit',
      brandId: '333a1e4d-0adb-499d-a59b-19fdfd182d48'
    }
  ];

  getCards() {
    return this.cards;
  }
}
