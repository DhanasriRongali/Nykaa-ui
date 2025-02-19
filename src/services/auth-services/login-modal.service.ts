import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  private loginVisible = new BehaviorSubject<boolean>(false);

  toggleLogin() {
    this.loginVisible.next(!this.loginVisible.value);
  }

  isLoginVisible(): Observable<boolean> {
    return this.loginVisible.asObservable();
  }

  closeLogin() {
    this.loginVisible.next(false);
  }
} 