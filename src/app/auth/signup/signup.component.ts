import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-services/auth.service';
import { CartService } from '../../../services/cart-services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;
  isLoading = false;
  errorMessage = '';
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.formSignup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]{10}$')
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {
    console.log('SignupComponent initialized');
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { 'passwordMismatch': true };
  }

  closeSignup() {
    this.cartService.closeSignupModal();
  }

  closeOnOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('auth-overlay')) {
      this.closeSignup();
    }
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.formSignup.valid) {
      this.isLoading = true;
      console.log('Form Values:', this.formSignup.value);
      
      const signupData = {
        name: this.formSignup.value.name,
        email: this.formSignup.value.email,
        phone: this.formSignup.value.phoneNumber,
        password: this.formSignup.value.password
      };
      
      console.log('Signup Data:', signupData);
      
      this.authService.signup(signupData).subscribe({
        next: (response) => {
          console.log('Signup Response:', response);
          this.isLoading = false;
          this.closeSignup();
          this.cartService.toggleLoginModal();
        },
        error: (error) => {
          console.error('Signup Error:', error);
          this.isLoading = false;
          this.errorMessage = error.message;
        }
      });
    } else {
      console.log('Form Invalid:', this.formSignup.errors);
      console.log('Form Status:', this.formSignup.status);
      console.log('Form Controls:', {
        name: this.formSignup.get('name')?.errors,
        email: this.formSignup.get('email')?.errors,
        phone: this.formSignup.get('phoneNumber')?.errors,
        password: this.formSignup.get('password')?.errors,
        confirmPassword: this.formSignup.get('confirmPassword')?.errors
      });
    }
  }

  openLogin() {
    this.cartService.closeSignupModal();
    this.cartService.toggleLoginModal();
  }
} 