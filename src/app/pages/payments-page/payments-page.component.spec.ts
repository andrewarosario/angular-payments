import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";

import { PaymentsPageComponent } from "./payments-page.component";

describe("PaymentsPageComponent", () => {
  let component: PaymentsPageComponent;
  let fixture: ComponentFixture<PaymentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponentModule],
      declarations: [PaymentsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
