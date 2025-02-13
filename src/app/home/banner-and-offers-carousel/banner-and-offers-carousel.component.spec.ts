import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAndOffersCarouselComponent } from './banner-and-offers-carousel.component';

describe('BannerAndOffersCarouselComponent', () => {
  let component: BannerAndOffersCarouselComponent;
  let fixture: ComponentFixture<BannerAndOffersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerAndOffersCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAndOffersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
