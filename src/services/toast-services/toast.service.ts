import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error';
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  toast$ = this.toastSubject.asObservable();
  private currentToastId = 0;

  showSuccess(message: string) {
    try {
      console.log('Showing success toast:', message);
      const toast: Toast = {
        message,
        type: 'success',
        id: ++this.currentToastId
      };
      this.toastSubject.next(toast);
      this.hideToast(toast.id);
    } catch (error) {
      console.error('Error showing success toast:', error);
    }
  }

  showError(message: string) {
    try {
      console.log('Showing error toast:', message);
      const toast: Toast = {
        message,
        type: 'error',
        id: ++this.currentToastId
      };
      this.toastSubject.next(toast);
      this.hideToast(toast.id);
    } catch (error) {
      console.error('Error showing error toast:', error);
    }
  }

  private hideToast(id: number) {
    setTimeout(() => {
      console.log('Hiding toast with id:', id);
      const currentToast = this.toastSubject.value;
      if (currentToast && currentToast.id === id) {
        this.toastSubject.next(null);
      }
    }, 3000);
  }
} 