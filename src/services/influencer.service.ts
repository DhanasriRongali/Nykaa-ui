import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Influencer } from '../types/influencer.types';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {
  private influencers: Influencer[] = [
    {
      id: 1,
      name: 'Riya Kohli',
      imageUrl: 'https://images-static.nykaa.com/uploads/1feaa8e7-b311-46fd-91cf-6308553c90c5.jpg?tr=cm-pad_resize,w-300',
      catchyText: 'Budgeted Picks Under ₹999'
    },
    {
      id: 2,
      name: 'Nagma Mirajkar',
      imageUrl: 'https://images-static.nykaa.com/uploads/eda5ddaa-04a8-4413-b045-8199bce475eb.jpg?tr=cm-pad_resize,w-300',
      catchyText: 'Makeup Vanity Under ₹1999'
    },
    {
      id: 3,
      name: 'Suchita Mukerji',
      imageUrl: 'https://images-static.nykaa.com/uploads/3b0e1f2c-d5c6-4760-a0aa-24f8f6f81eb8.jpg?tr=cm-pad_resize,w-300',
      catchyText: 'Luxe Favs To Invest In'
    },
    {
      id: 4,
      name: 'Sarah Sarosh',
      imageUrl: 'https://images-static.nykaa.com/uploads/f8a85614-3d98-4141-9535-4322b183e3f8.jpg?tr=cm-pad_resize,w-300',
      catchyText: 'Hair Routine Under ₹1999'
    },
    {
      id: 5,
      name: 'Mushkan Rawat',
      imageUrl: 'https://images-static.nykaa.com/uploads/92fc44ee-8244-425c-92b4-87ce39c70b8c.jpg?tr=cm-pad_resize,w-300',
      catchyText: 'Personal Care Under ₹1799'
    }
  ];

  getInfluencers(): Observable<Influencer[]> {
    return of(this.influencers);
  }
}