

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../../services/home-services/global-brands-to-love.service'; // Import the service

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-brands-to-love.component.html',
  styleUrls: ['./global-brands-to-love.component.css']
})
export class ImageGridComponent implements OnInit {
  images: { id: number; url: string; navLink: string }[] = []; // Define empty array

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.images = this.imageService.getImages(); // Fetch images from service
  }
}
