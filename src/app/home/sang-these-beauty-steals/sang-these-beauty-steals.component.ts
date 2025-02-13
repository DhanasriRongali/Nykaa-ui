import { Component, OnInit } from '@angular/core';
import { SangTheseBeautyStealsService } from '../../../services/sang-these-beauty-steals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sang-these-beauty-steals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sang-these-beauty-steals.component.html',
  styleUrls: ['./sang-these-beauty-steals.component.css']
})
export class SangTheseBeautyStealsComponent implements OnInit {
  titleImage: string | undefined;
  displayImages: string[] = [];

  constructor(private beautyStealsService: SangTheseBeautyStealsService) { }

  ngOnInit(): void {
    const beautyStealsData = this.beautyStealsService.getBeautyStealsData();
    const titleItem = beautyStealsData.images.find(img => 'titleImage' in img);
    if (titleItem && 'titleImage' in titleItem) {
      this.titleImage = titleItem.titleImage;
    }
    this.displayImages = beautyStealsData.images.filter(img => 'displayImage' in img).map(img => img.displayImage!);
  }
}