import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginModalService } from '../../../services/login-modal.service';
import { SignupModalService } from '../../../services/signup-modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin: FormGroup;
  isLoading = false;
  errorMessage = '';
  hidePassword = true;
  isVisible = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loginModalService: LoginModalService,
    private signupModalService: SignupModalService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.loginModalService.isLoginVisible().subscribe(visible => {
      this.isVisible = visible;
    });
  }

  closeLogin() {
    this.loginModalService.closeLogin();
  }

  closeOnOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('login-overlay')) {
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
          this.isLoading = false;
          this.closeLogin();
          // Optionally refresh the page or update UI
          window.location.reload();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message;
        }
      });
    }
  }

  openSignup() {
    this.loginModalService.closeLogin();
    this.signupModalService.toggleSignup();
  }
}
