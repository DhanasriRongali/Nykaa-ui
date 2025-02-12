import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../../services/footer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  infoSectionLinks = this.navigationService.getInfoSectionLinks();
  helpLinks = this.navigationService.getHelpLinks();
  inspireMeLinks = this.navigationService.getInspireMeLinks();
  quickLinks = this.navigationService.getQuickLinks();
  topCategoriesLinks = this.navigationService.getTopCategoriesLinks();
  popularLinks = this.navigationService.getPopularLinks();

  constructor(private navigationService: NavigationService) {}
}