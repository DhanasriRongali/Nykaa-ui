import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupModalService {
  private signupVisible = new BehaviorSubject<boolean>(false);

  toggleSignup() {
    this.signupVisible.next(!this.signupVisible.value);
  }

  isSignupVisible(): Observable<boolean> {
    return this.signupVisible.asObservable();
  }

  closeSignup() {
    this.signupVisible.next(false);
  }
} 