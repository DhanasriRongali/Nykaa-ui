import { Component, OnInit } from '@angular/core';
import { CupidApprovedOffersService } from '../../../services/cupid-approved-offers.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cupid-approved-offers',
  templateUrl: './cupid-approved-offers.component.html',
  styleUrls: ['./cupid-approved-offers.component.css']
})
export class CupidApprovedOffersComponent implements OnInit {
  offers: any[] = [];
  titleImage: string = '';

  constructor(private cupidApprovedOffersService: CupidApprovedOffersService) { }

  ngOnInit(): void {
    this.cupidApprovedOffersService.getCupidApprovedOffers().subscribe((data: { images: { titleImage: string }[] }) => {
      if (data.images && data.images.length) {
        this.titleImage = data.images[0].titleImage;
        this.offers = data.images.slice(1);
      }
    });
  }
}
