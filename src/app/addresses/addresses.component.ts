import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-services/auth.service';
import { AddressService } from '../../services/address-services/address.service';
import { UserSideMenuComponent } from '../user-side-menu/user-side-menu.component';

interface AddressModel {
  id: string;
  type: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  is_default?: boolean;
}

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, UserSideMenuComponent],
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  addresses: AddressModel[] = [];
  isLoading = true;
  editMode: { [key: string]: boolean } = {};
  editedAddress: AddressModel | null = null;
  showAddForm = false;
  newAddress: AddressModel = this.getEmptyAddress();

  constructor(
    private addressService: AddressService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.loadAddresses();
  }

  private getEmptyAddress(): AddressModel {
    return {
      id: '',
      type: '',
      street: '',
      city: '',
      state: '',
      postal_code: '',
      is_default: false
    };
  }

  loadAddresses() {
    this.isLoading = true;
    this.addressService.getUserAddresses().subscribe({
      next: (addresses: AddressModel[]) => {
        this.addresses = addresses;
        this.isLoading = false;
      },
      error: (error: unknown) => {
        console.error('Error loading addresses:', error);
        this.isLoading = false;
      }
    });
  }

  toggleEdit(address: AddressModel) {
    this.editMode[address.id] = !this.editMode[address.id];
    if (this.editMode[address.id]) {
      this.editedAddress = { ...address };
    }
  }

  cancelEdit(addressId: string) {
    this.editMode[addressId] = false;
    this.editedAddress = null;
  }

  saveAddress(addressId: string) {
    if (!this.editedAddress) return;

    // Create update object with only the fields we want to update
    const updateData = {
      type: this.editedAddress.type,
      street: this.editedAddress.street,
      city: this.editedAddress.city,
      state: this.editedAddress.state,
      postal_code: this.editedAddress.postal_code
    };

    this.addressService.updateAddress(addressId, updateData).subscribe({
      next: (updatedAddress) => {
        const index = this.addresses.findIndex(addr => addr.id === addressId);
        if (index !== -1) {
          // Preserve is_default status when updating
          this.addresses[index] = {
            ...updatedAddress,
            is_default: this.addresses[index].is_default
          };
        }
        this.editMode[addressId] = false;
        this.editedAddress = null;
      },
      error: (error: unknown) => {
        console.error('Error updating address:', error);
      }
    });
  }

  deleteAddress(addressId: string) {
    if (confirm('Are you sure you want to delete this address?')) {
      this.addressService.deleteAddress(addressId).subscribe({
        next: () => {
          this.addresses = this.addresses.filter(addr => addr.id !== addressId);
        },
        error: (error: unknown) => {
          console.error('Error deleting address:', error);
        }
      });
    }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.newAddress = this.getEmptyAddress();
    }
  }

  addAddress() {
    this.addressService.addAddress(this.newAddress).subscribe({
      next: (addedAddress: AddressModel) => {
        this.addresses.push(addedAddress);
        this.showAddForm = false;
        this.newAddress = this.getEmptyAddress();
      },
      error: (error: unknown) => {
        console.error('Error adding address:', error);
      }
    });
  }

  setDefaultAddress(addressId: string) {
    this.addressService.setDefaultAddress(addressId).subscribe({
      next: () => {
        this.addresses = this.addresses.map(addr => ({
          ...addr,
          is_default: addr.id === addressId
        }));
      },
      error: (error: unknown) => {
        console.error('Error setting default address:', error);
      }
    });
  }
} 