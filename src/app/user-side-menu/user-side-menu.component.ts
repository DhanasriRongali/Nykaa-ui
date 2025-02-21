import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth-services/auth.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

  constructor(private authService: AuthService,private router: Router) {
    Notify.init({
      position: 'right-bottom',
      timeout: 3000,
      cssAnimation: true,
      cssAnimationDuration: 400,
      cssAnimationStyle: 'fade',
      success: {
        background: '#28a745',
      },
      failure: {
        background: '#dc3545',
      }
    });
  }

  logout() {
    this.authService.logoutLocally();
    Notify.success('Logged out successfully');
    this.router.navigate(['/']);
  }
}