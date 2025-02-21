import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-services/auth.service';
import { CartService } from '../../../services/cart-services/cart.service';
import { CommonModule } from '@angular/common';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isLoading = false;
  errorMessage = '';
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

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

  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  closeLogin() {
    console.log('Closing login');
    this.cartService.closeLoginModal();
    event?.stopPropagation();
  }

  closeOnOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('auth-overlay')) {
      this.closeLogin();
    }
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.isLoading = true;
      this.authService.login(this.formLogin.value).subscribe({
        next: (response) => {
          console.log('Login Success Response:', response);
          this.isLoading = false;
          this.closeLogin();
          window.location.reload();
          Notify.success('Logged in successfully');
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message;
          Notify.failure('Login failed. Please check your credentials.');
        }
      });
    }
  }

  openSignup() {
    console.log('Opening signup');
    this.cartService.closeLoginModal();
    this.cartService.toggleSignupModal();
  }
}
