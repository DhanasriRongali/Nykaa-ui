import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSideMenuComponent } from '../user-side-menu/user-side-menu.component';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  addresses?: Array<{
    type: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
  }>;
}

interface EditMode {
  [key: string]: boolean;
  personal: boolean;
  contact: boolean;
}

interface UpdateData {
  [key: string]: string;
}

@Component({
    selector: 'app-profile',
    imports: [CommonModule, FormsModule, RouterModule, UserSideMenuComponent],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile | null = null;
  editedProfile: UserProfile = {
    name: '',
    email: ''
  };
  editMode: EditMode = {
    personal: false,
    contact: false
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
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
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.getUserProfile().subscribe({
      next: (profile: UserProfile) => {
        this.userProfile = profile;
        this.editedProfile = { ...profile };
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      }
    });
  }

  toggleEdit(section: keyof EditMode) {
    this.editMode[section] = true;
    this.editedProfile = { ...this.userProfile } as UserProfile;
  }

  cancelEdit(section: keyof EditMode) {
    this.editMode[section] = false;
    this.editedProfile = { ...this.userProfile } as UserProfile;
  }

  saveChanges(section: keyof EditMode) {
    const updateData: UpdateData = {};
    
    if (section === 'personal') {
      updateData['name'] = this.editedProfile.name;
      updateData['email'] = this.editedProfile.email;
    } else if (section === 'contact') {
      updateData['phone'] = this.editedProfile.phone || '';
    }

    this.authService.updateProfile(updateData).subscribe({
      next: (response) => {
        this.userProfile = { ...this.userProfile, ...updateData } as UserProfile;
        this.editMode[section] = false;
        Notify.success('Profile updated successfully');
      },
      error: (error) => {
        console.error('Error updating profile:', error);
        Notify.failure('Failed to update profile');
      }
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        Notify.success('Logged out successfully');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Logout error:', error);
        Notify.failure('Error during logout');
        this.authService.logoutLocally();
        this.router.navigate(['/']);
      }
    });
  }
} 