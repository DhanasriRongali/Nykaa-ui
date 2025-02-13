import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangTheseBeautyStealsComponent } from './sang-these-beauty-steals.component';

describe('SangTheseBeautyStealsComponent', () => {
  let component: SangTheseBeautyStealsComponent;
  let fixture: ComponentFixture<SangTheseBeautyStealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SangTheseBeautyStealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangTheseBeautyStealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
