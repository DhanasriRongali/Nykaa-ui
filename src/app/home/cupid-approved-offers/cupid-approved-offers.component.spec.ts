import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupidApprovedOffersComponent } from './cupid-approved-offers.component';

describe('CupidApprovedOffersComponent', () => {
  let component: CupidApprovedOffersComponent;
  let fixture: ComponentFixture<CupidApprovedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupidApprovedOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupidApprovedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
