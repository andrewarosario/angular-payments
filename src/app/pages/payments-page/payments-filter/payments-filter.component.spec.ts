import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsFilterComponent } from './payments-filter.component';

describe('PaymentsFilterComponent', () => {
  let component: PaymentsFilterComponent;
  let fixture: ComponentFixture<PaymentsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
