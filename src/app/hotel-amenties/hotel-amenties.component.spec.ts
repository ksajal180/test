import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAmentiesComponent } from './hotel-amenties.component';

describe('HotelAmentiesComponent', () => {
  let component: HotelAmentiesComponent;
  let fixture: ComponentFixture<HotelAmentiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelAmentiesComponent]
    });
    fixture = TestBed.createComponent(HotelAmentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
