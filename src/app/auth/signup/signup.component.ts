import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SignupModalService } from '../../../services/signup-modal.service';
import { LoginModalService } from '../../../services/login-modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  isVisible = false;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private signupModalService: SignupModalService,
    private loginModalService: LoginModalService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit() {
    this.signupModalService.isSignupVisible().subscribe(visible => {
      this.isVisible = visible;
    });
  }

  closeSignup() {
    this.signupModalService.closeSignup();
  }

  closeOnOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('signup-overlay')) {
      this.closeSignup();
    }
  }

  openLogin() {
    this.signupModalService.closeSignup();
    this.loginModalService.toggleLogin();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? 
      null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      const userData = {
        name: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.phoneNumber
      };

      this.authService.signup(userData).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          console.log('Signup Response:', response);
          this.signupModalService.closeSignup();
          this.loginModalService.toggleLogin();
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Signup Error:', error);
          this.errorMessage = error.message;
        }
      });
    }
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
} 