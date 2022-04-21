import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockPayments } from "src/app/mocks/payments.mock";

import { PaymentsTableComponent } from "./payments-table.component";
import { PaymentsTableModule } from "./payments-table.module";

describe(PaymentsTableComponent.name, () => {
  let component: PaymentsTableComponent;
  let fixture: ComponentFixture<PaymentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsTableModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsTableComponent);
    component = fixture.componentInstance;
    component.payments = mockPayments;
  });

  it("should render all items", () => {
    fixture.detectChanges();
    const trElements = fixture.nativeElement.querySelectorAll("tr.mat-row");
    expect(trElements.length).toBe(component.payments.length);
  });

  it("should sort columns in table", () => {
    spyOn(component.sortChange, "emit");
    fixture.detectChanges();
    const sortColumns = component.displayedColumns.filter(
      (column) => column !== "actions"
    );

    sortColumns.forEach((column) => {
      const thSortElement = fixture.nativeElement.querySelector(
        `th[mat-sort-header=${column}]`
      );
      expect(thSortElement).withContext(`Column: ${column}`).toBeTruthy();
      thSortElement.click();
    });
    expect(component.sortChange.emit).toHaveBeenCalledTimes(sortColumns.length);
  });
});
