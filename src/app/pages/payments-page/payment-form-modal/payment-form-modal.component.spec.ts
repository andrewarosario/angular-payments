import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockPayments } from "src/app/mocks/payments.mock";

import { PaymentFormModalComponent } from "./payment-form-modal.component";
import { PaymentFormModalModule } from "./payment-form-modal.module";

describe(PaymentFormModalComponent.name, () => {
  let component: PaymentFormModalComponent;
  let fixture: ComponentFixture<PaymentFormModalComponent>;
  let dialogSpy: MatDialogRef<PaymentFormModalComponent>;
  let [mockPayment] = mockPayments;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
    await TestBed.configureTestingModule({
      imports: [
        PaymentFormModalModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockPayment },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
