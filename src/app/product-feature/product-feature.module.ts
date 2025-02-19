import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFeatureComponent } from './product-feature.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    ProductFeatureComponent,
    OverviewComponent,
    DetailsComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductFeatureComponent
  ]
})
export class ProductFeatureModule { }
