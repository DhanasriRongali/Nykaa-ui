import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyToFallForComponent } from './beauty-to-fall-for.component';

describe('BeautyToFallForComponent', () => {
  let component: BeautyToFallForComponent;
  let fixture: ComponentFixture<BeautyToFallForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyToFallForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyToFallForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
