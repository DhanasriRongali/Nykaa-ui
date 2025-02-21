import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrderDetailsComponent]
})
export class OrderDetailsModule { }