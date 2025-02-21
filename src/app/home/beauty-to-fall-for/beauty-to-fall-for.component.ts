import { Component, OnInit } from '@angular/core';
import { BeautyToFallForService } from '../../../services/home-services/beauty-to-fall-for.service';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule],
    selector: 'app-beauty-to-fall-for',
    templateUrl: './beauty-to-fall-for.component.html',
    styleUrls: ['./beauty-to-fall-for.component.css']
})
export class BeautyToFallForComponent implements OnInit {
  beautyToFallFor: any;

  constructor(private beautyToFallForService: BeautyToFallForService) { }

  ngOnInit(): void {
    this.beautyToFallForService.getBeautyToFallForImages().subscribe(data => {
      this.beautyToFallFor = data;
    });
  }
}
