import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PaymentsFilterComponent } from "./payments-filter.component";
import { PaymentsFilterModule } from "./payments-filter.module";

describe(PaymentsFilterComponent.name, () => {
  let component: PaymentsFilterComponent;
  let fixture: ComponentFixture<PaymentsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, PaymentsFilterModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should enable filters", () => {
    component.toggleFilters();
    expect(component.showFilters).toBe(true);
  });

  it("should disable filters", () => {
    spyOn(component.filterForm, "reset");
    component.showFilters = true;
    component.toggleFilters();
    expect(component.showFilters).toBe(false);
    expect(component.filterForm.reset).toHaveBeenCalled();
  });
});
