import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="!isAuthRoute()"></app-header>
    <router-outlet></router-outlet>
    <app-footer *ngIf="!isAuthRoute()"></app-footer>
  `
})
export class AppComponent {
  constructor(private router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url.includes('/auth');
  }
} 