import { CurrencyPipe, DatePipe } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LocaleModule } from "src/app/core/locale/locale.module";
import { mockPayments } from "src/app/mocks/payments.mock";
import { PaymentFormModalComponent } from "../payment-form-modal/payment-form-modal.component";

import { PaymentDeleteModalComponent } from "./payment-delete-modal.component";
import { PaymentDeleteModalModule } from "./payment-delete-modal.module";

describe(PaymentDeleteModalComponent.name, () => {
  let component: PaymentDeleteModalComponent;
  let fixture: ComponentFixture<PaymentDeleteModalComponent>;
  let dialogSpy: MatDialogRef<PaymentFormModalComponent>;
  let [mockPayment] = mockPayments;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
    await TestBed.configureTestingModule({
      imports: [PaymentDeleteModalModule, LocaleModule],
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

  it("should display payment data to be deleted", () => {
    const [name, date, value] =
      fixture.nativeElement.querySelector(".payment-data").childNodes;
    expect(name.textContent.trim()).toBe(`Usuário: ${component.payment.name}`);
    expect(date.textContent.trim()).toBe(
      `Data: ${new DatePipe("pt-BR").transform(
        component.payment.date,
        "dd/MM/yyyy"
      )}`
    );
    expect(value.textContent.trim()).toBe(
      `Valor: ${new CurrencyPipe("pt-BR").transform(
        component.payment.value,
        "BRL"
      )}`
    );
  });

  it("should emit delete by clicking delete button", () => {
    const deleteButton = fixture.nativeElement.querySelector("#delete");
    deleteButton.click();
    expect(dialogSpy.close).toHaveBeenCalledOnceWith(component.payment);
  });

  it("should emit cancel by clicking cancel button", () => {
    const cancelButton = fixture.nativeElement.querySelector("#cancel");
    cancelButton.click();
    expect(dialogSpy.close).toHaveBeenCalledOnceWith();
  });
});
