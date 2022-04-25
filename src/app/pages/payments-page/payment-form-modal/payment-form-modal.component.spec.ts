import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockPayments } from "src/app/mocks/payments.mock";

import { PaymentFormModalComponent } from "./payment-form-modal.component";
import { PaymentFormModalModule } from "./payment-form-modal.module";

describe(PaymentFormModalComponent.name, () => {
  let component: PaymentFormModalComponent;
  let fixture: ComponentFixture<PaymentFormModalComponent>;
  let dialogSpy: MatDialogRef<PaymentFormModalComponent>;
  let [mockPayment] = mockPayments;

  function submitForm(): void {
    const formElement = fixture.debugElement.query(By.css("form"));
    formElement.triggerEventHandler("submit", {});
  }

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
  });

  it("should display title by tipe", () => {
    component.payment = null;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("h1").textContent.trim()).toBe(
      "Adicionar pagamento"
    );

    component.payment = mockPayment;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("h1").textContent.trim()).toBe(
      "Editar pagamento"
    );
  });

  it("should update form on edit mode", () => {
    component.payment = mockPayment;
    fixture.detectChanges();
    expect(component.form.value.name).toBe(component.payment.name);
    expect(component.form.value.value).toBe(component.payment.value);
    expect(component.form.value.date).toBe(component.payment.date);
    expect(component.form.value.title).toBe(component.payment.title);
  });

  it("should submit form with correct value", () => {
    component.payment = mockPayment;
    fixture.detectChanges();
    submitForm();
    expect(dialogSpy.close).toHaveBeenCalledWith({
      name: component.payment.name,
      value: component.payment.value,
      date: component.payment.date,
      title: component.payment.title,
    });
  });

  it("should not submit when form is invalid", () => {
    component.payment = mockPayment;
    fixture.detectChanges();
    component.form.patchValue({ name: "" });
    submitForm();
    expect(dialogSpy.close).not.toHaveBeenCalled();
  });

  it("should cancel operation", () => {
    component.payment = mockPayment;
    fixture.detectChanges();
    const cancelButton = fixture.nativeElement.querySelector("#cancel");
    cancelButton.click();
    expect(dialogSpy.close).toHaveBeenCalledWith();
  });
});
