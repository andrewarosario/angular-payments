import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { mockPayments } from "src/app/mocks/payments.mock";
import { PaymentApiService } from "src/app/services/payment-api/payment-api.service";
import { PaymentsPageComponent } from "./payments-page.component";
import { PaymentsPageModule } from "./payments-page.module";

const [mockPayment] = mockPayments;
class DialogMock {
  open() {
    return {
      afterClosed: () => of(mockPayment),
    };
  }
}

describe(PaymentsPageComponent.name, () => {
  let component: PaymentsPageComponent;
  let fixture: ComponentFixture<PaymentsPageComponent>;
  let paymentApiService: PaymentApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PaymentsPageModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
      ],
      providers: [{ provide: MatDialog, useClass: DialogMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsPageComponent);
    component = fixture.componentInstance;
    paymentApiService = TestBed.inject(PaymentApiService);
    fixture.detectChanges();
  });

  it("should render title", () => {
    const logoElement = fixture.nativeElement.querySelector(".ui-title");
    expect(logoElement.textContent.trim()).toBe("Meus pagamentos");
  });

  it("should call create when open modal without parameter", () => {
    spyOn(paymentApiService, "create").and.returnValue(of(mockPayment));
    component.openFormModal();
    expect(paymentApiService.create).toHaveBeenCalledWith(mockPayment);
  });

  it("should call update when open modal with payment parameter", () => {
    spyOn(paymentApiService, "update").and.returnValue(of(mockPayment));
    component.openFormModal(mockPayment);
    expect(paymentApiService.update).toHaveBeenCalledWith(
      mockPayment.id,
      mockPayment
    );
  });

  it("should call update when toggle payed checkbox", () => {
    spyOn(paymentApiService, "update").and.returnValue(of(mockPayment));
    component.togglePayed(mockPayment);
    expect(paymentApiService.update).toHaveBeenCalledWith(mockPayment.id, {
      isPayed: !mockPayment.isPayed,
    });
  });

  it("should call delete when open delete modal", () => {
    spyOn(paymentApiService, "delete").and.returnValue(of({}));
    component.openDeleteModal(mockPayment);
    expect(paymentApiService.delete).toHaveBeenCalledWith(mockPayment.id);
  });
});
