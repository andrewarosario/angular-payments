import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { mockPayments } from "src/app/mocks/payments.mock";
import { PaymentFormModalComponent } from "../payment-form-modal/payment-form-modal.component";

import { PaymentDeleteModalComponent } from "./payment-delete-modal.component";

describe("PaymentDeleteModalComponent", () => {
  let component: PaymentDeleteModalComponent;
  let fixture: ComponentFixture<PaymentDeleteModalComponent>;
  let dialogSpy: MatDialogRef<PaymentFormModalComponent>;
  let [mockPayment] = mockPayments;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
    await TestBed.configureTestingModule({
      declarations: [PaymentDeleteModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockPayment },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
