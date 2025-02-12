import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App);