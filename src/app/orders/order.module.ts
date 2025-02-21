import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from '../order-details/order-details.component'; // ✅ Import it

@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent], // ✅ Declare it here
  imports: [CommonModule, RouterModule], // ✅ No need to import OrderDetailsComponent here
  exports: [OrdersComponent] // ✅ Export it if needed
})
export class OrdersModule {}
