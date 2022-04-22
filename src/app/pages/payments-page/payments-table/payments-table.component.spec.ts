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

  it("should edit payment by clicking the edit button", () => {
    spyOn(component.edit, "emit");
    fixture.detectChanges();

    const editButtons: HTMLButtonElement[] =
      fixture.nativeElement.querySelectorAll(
        "button[aria-label='Editar pagamento']"
      );

    editButtons.forEach((button, index) => {
      button.click();
      expect(component.edit.emit)
        .withContext(`Payment: ${component.payments[index].title}`)
        .toHaveBeenCalledWith(component.payments[index]);
    });
  });

  it("should delete payment by clicking the delete button", () => {
    spyOn(component.delete, "emit");
    fixture.detectChanges();

    const deleteButtons: HTMLButtonElement[] =
      fixture.nativeElement.querySelectorAll(
        "button[aria-label='Excluir pagamento']"
      );

    deleteButtons.forEach((button, index) => {
      button.click();
      expect(component.delete.emit)
        .withContext(`Payment: ${component.payments[index].title}`)
        .toHaveBeenCalledWith(component.payments[index]);
    });
  });

  it("should toggle payment by check/uncheck is payed checkbox", () => {
    spyOn(component.togglePayed, "emit");
    fixture.detectChanges();

    const checkboxElements: HTMLInputElement[] =
      fixture.nativeElement.querySelectorAll("input[type=checkbox]");

    checkboxElements.forEach((input, index) => {
      input.click();
      expect(component.togglePayed.emit)
        .withContext(`Payment: ${component.payments[index].title}`)
        .toHaveBeenCalledWith(component.payments[index]);
    });
  });
});
