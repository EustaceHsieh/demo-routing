import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InqCollectionComponent } from './inq-collection.component';

describe('InqCollectionComponent', () => {
  let component: InqCollectionComponent;
  let fixture: ComponentFixture<InqCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InqCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
