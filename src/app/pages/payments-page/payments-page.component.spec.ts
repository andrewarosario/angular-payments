import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PaymentApiService } from "src/app/services/payment-api/payment-api.service";
import { PaymentsPageComponent } from "./payments-page.component";
import { PaymentsPageModule } from "./payments-page.module";

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
});
