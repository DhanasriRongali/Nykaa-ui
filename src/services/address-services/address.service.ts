import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Address {
  id: string;
  user_id?: string;
  type: string;
  street: string;
  city: string;
  state: string;
  country?: string;
  postal_code: string;
  is_default?: boolean;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
 
  getUserAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiUrl}/user-addresses`, {
      headers: this.getAuthHeaders()
    });
  }

  addAddress(address: Omit<Address, 'id'>): Observable<Address> {
    return this.http.post<Address>(`${this.apiUrl}/user/addresses`, address, {
      headers: this.getAuthHeaders()
    });
  }

  updateAddress(addressId: string, address: Partial<Address>): Observable<Address> {
    return this.http.put<Address>(`${this.apiUrl}/user-addresses/${addressId}`, address, {
      headers: this.getAuthHeaders()
    });
  }

  deleteAddress(addressId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/user/addresses/${addressId}`, {
      headers: this.getAuthHeaders()
    });
  }

  setDefaultAddress(addressId: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/user-addresses/${addressId}`, {}, {
      headers: this.getAuthHeaders()
    });
  }
} 