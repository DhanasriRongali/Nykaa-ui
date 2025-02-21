import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-services/auth.service';

@Component({
  selector: 'app-user-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-side-menu.component.html',
  styleUrls: ['./user-side-menu.component.css']
})
export class UserSideMenuComponent {
  @Input() activeRoute: string = '';
  @Input() userName: string | null | undefined = null;
  @Input() userEmail: string | null | undefined = null;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        // Navigation will be handled by AuthService
      },
      error: (error) => {
        console.error('Logout error:', error);
        this.authService.logout();
      }
    });
  }
} 