import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotyfService {
  private notyf: Notyf;

  constructor() {
    this.notyf = new Notyf({
      duration: 3000,
      position: { x: 'right', y: 'top' },
      dismissible: true,
      types: [
        {
          type: 'success',
          background: '#e40046',
          icon: {
            className: 'notyf__icon--success',
            tagName: 'i'
          }
        },
        {
          type: 'error',
          background: '#ff3333',
          icon: {
            className: 'notyf__icon--error',
            tagName: 'i'
          }
        }
      ]
    });
  }

  success(message: string) {
    this.notyf.success(message);
  }

  error(message: string) {
    this.notyf.error(message);
  }
} 