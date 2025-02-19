import { Component, OnInit } from '@angular/core';
import { FlashSalesService } from '../../../services/home-services/flashsale.service';
import { FlashSaleImage } from '../../../types/flash-sale.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flash-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.css']
})
export class FlashSalesComponent implements OnInit {
  banner: FlashSaleImage | undefined;
  flashItems: FlashSaleImage[] = [];

  constructor(private flashSalesService: FlashSalesService) { }

  ngOnInit(): void {
    const images = this.flashSalesService.getImages();
    if (images && images.length > 0) {
      this.banner = images[0];
      this.flashItems = images.slice(1);
    }
  }
}
