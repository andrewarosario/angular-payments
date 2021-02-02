import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBtnComponent } from './transaction-btn.component';

describe('TransactionBtnComponent', () => {
  let component: TransactionBtnComponent;
  let fixture: ComponentFixture<TransactionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
