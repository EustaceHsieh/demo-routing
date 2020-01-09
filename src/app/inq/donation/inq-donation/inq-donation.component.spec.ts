import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InqDonationComponent } from './inq-donation.component';

describe('InqDonationComponent', () => {
  let component: InqDonationComponent;
  let fixture: ComponentFixture<InqDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InqDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
