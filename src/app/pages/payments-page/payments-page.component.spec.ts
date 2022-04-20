import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentsPageComponent } from "./payments-page.component";
import { PaymentsPageModule } from "./payments-page.module";

describe("PaymentsPageComponent", () => {
  let component: PaymentsPageComponent;
  let fixture: ComponentFixture<PaymentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsPageModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should render title", () => {
    const logoElement = fixture.nativeElement.querySelector(".ui-title");
    expect(logoElement.textContent.trim()).toBe("Meus pagamentos");
  });
});
