import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Influencer } from '../../../types/influencer.types';
import { InfluencerService } from '../../../services/home-services/influencer.service';

@Component({
  selector: 'app-influencer-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './influencer-stores.component.html',
  styleUrls: ['./influencer-stores.component.css']
})
export class InfluencerStoresComponent implements OnInit {
  influencers: Influencer[] = [];

  constructor(private influencerService: InfluencerService) {}

  ngOnInit(): void {
    this.influencerService.getInfluencers().subscribe(
      data => this.influencers = data
    );
  }
}