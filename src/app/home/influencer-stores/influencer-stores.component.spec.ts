import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerStoresComponent } from './influencer-stores.component';

describe('InfluencerStoresComponent', () => {
  let component: InfluencerStoresComponent;
  let fixture: ComponentFixture<InfluencerStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfluencerStoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
