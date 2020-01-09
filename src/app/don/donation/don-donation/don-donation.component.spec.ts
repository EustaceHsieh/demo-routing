import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonDonationComponent } from './don-donation.component';

describe('DonDonationComponent', () => {
  let component: DonDonationComponent;
  let fixture: ComponentFixture<DonDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
