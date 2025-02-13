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
      offerText: ''
    },
    { 
        imageUrl: 'https://images-static.nykaa.com/uploads/688bdfb3-ef2a-4143-b5aa-4236cb4f7b9e.jpg?tr=cm-pad_resize,w-300', 
        caption: 'Up To 30% Off On Entire Range',
        navLink: '#',
        offerText: 'Limited Time Offer'
      },
      {
      imageUrl: 'https://images-static.nykaa.com/uploads/c80d666f-36c6-4fd8-9049-cb244924d0e2.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Flat 15% Off',
      navLink: '#',
      offerText: 'On Bestsellers'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/e067046d-b159-4058-89a8-09bd8d976326.jpg?tr=cm-pad_resize,w-450', 
      caption: 'Up To 50% Off',
      navLink: '#',
      offerText: 'Extra 10% Off On ₹699*'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/be357a32-6887-4d78-aa1c-8b35aa67487c.jpg?tr=cm-pad_resize,w-450', 
      caption: 'Up To 20% Off',
      navLink: '#',
      offerText: 'Free Gift On ₹1259+'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/bab1391e-64d4-4f06-88d4-0234d92a4ecb.jpg?tr=cm-pad_resize,w-450', 
      caption: 'Up To 25% Off',
      navLink: '#',
      offerText: 'Pick A Mini On ₹799'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/f4dda988-1b0f-4fd8-a296-25f9330ed64b.jpg?tr=cm-pad_resize,w-450', 
      caption: 'Up To 30% Off',
      navLink: '#',
      offerText: 'Extra 10% Off On ₹499*'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/ecac92e3-03b9-4632-9526-179d532ab24e.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Min. 10% Off',
      navLink: '#',
      offerText: 'Free Gifts On All Orders'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/0b8ca148-cc78-44ca-8334-9789b55ea327.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 40% Off',
      navLink: '#',
      offerText: 'On Bestsellers'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/171ece0e-ef6d-4348-a41c-f05876fa5147.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 40% Off',
      navLink: '#',
      offerText: 'Extra 10% Off On ₹599*'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/7b6d9fac-0ad2-401c-bd27-fceada75ccc2.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 35% Off',
      navLink: '#',
      offerText: 'Free Gifts Worth ₹899+'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/236a8bcb-e45f-448a-bd46-d9a598d661a2.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 40% Off',
      navLink: '#',
      offerText: 'Extra 10% Off On ₹599*'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/c71e3891-7e73-4ae6-a53f-ef8921861846.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 30% Off',
      navLink: '#',
      offerText: 'Free Gift On ₹1199+'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/4c911616-70ff-4f1a-a79f-cb7e709398c7.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 30% Off',
      navLink: '#',
      offerText: 'Cleanser On ₹399'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/55fa68e8-dfa1-4172-8c05-5691017f031d.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Gift Worth ₹1200',
      navLink: '#',
      offerText: 'On Order above ₹3999'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/8c5e906c-ccd3-4567-bece-e7d3c92ff6fb.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Min. 25% Off*',
      navLink: '#',
      offerText: 'Free Gift On ₹329+'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/063ae8aa-e43f-4bb6-8bb8-2423db6a1837.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Flat 25% Off*',
      navLink: '#',
      offerText: 'Free Mini On ₹2000'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/79d02e80-52de-4f94-a3c2-a93fe9b3d3cc.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 40% Off',
      navLink: '#',
      offerText: 'Extra 10% Off On ₹599*'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/6acdebee-8b74-4768-ac8e-86e25427030a.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 40% Off',
      navLink: '#',
      offerText: 'Extra 10% Off On ₹699*'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/5f9d56c7-52b8-4f45-8574-8b3a80e1a52c.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 25% Off',
      navLink: '#',
      offerText: 'On Iconic Makeup'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/0f6cee8a-5575-407a-823e-0da35d312c53.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 35% Off',
      navLink: '#',
      offerText: 'Free Serum On ₹499+'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/6e764c73-d5bb-481b-a145-26fcd7fc98c1.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Up To 40% Off',
      navLink: '#',
      offerText: 'Free Bestseller On ₹599+'
    },
    { 
      imageUrl: 'https://images-static.nykaa.com/uploads/22dfa845-ec18-4c9c-8036-95d792d5b721.jpg?tr=cm-pad_resize,w-300', 
      caption: 'Buy 2 & Get Free',
      navLink: '#',
      offerText: 'Hair Travel Kit'
    },


  ];

  getCards() {
    return this.cards;
  }
}
