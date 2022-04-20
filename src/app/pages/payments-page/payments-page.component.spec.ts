import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PaymentsPageComponent } from "./payments-page.component";
import { PaymentsPageModule } from "./payments-page.module";

describe(PaymentsPageComponent.name, () => {
  let component: PaymentsPageComponent;
  let fixture: ComponentFixture<PaymentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PaymentsPageModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
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
