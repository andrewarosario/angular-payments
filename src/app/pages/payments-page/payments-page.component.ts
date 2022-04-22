import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { filter, switchMap } from "rxjs/operators";
import { Payment } from "src/app/models/payment";
import { PaymentApiService } from "src/app/services/payment-api/payment-api.service";
import { PaymentFormModalComponent } from "./payment-form-modal/payment-form-modal.component";

@Component({
  templateUrl: "./payments-page.component.html",
  styleUrls: ["./payments-page.component.scss"],
})
export class PaymentsPageComponent {
  constructor(
    private paymentApiService: PaymentApiService,
    private dialog: MatDialog
  ) {}

  openModal(payment?: Payment | undefined): void {
    const dialogRef = this.dialog.open(PaymentFormModalComponent, {
      data: payment,
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((paymentToSave: Payment) => {
          return payment
            ? this.paymentApiService.update(payment.id, paymentToSave)
            : this.paymentApiService.create(paymentToSave);
        })
      )
      .subscribe(() => console.log("salvo"));
  }

  togglePayed(payment: Payment): void {
    this.paymentApiService
      .update(payment.id, { isPayed: !payment.isPayed })
      .subscribe();
  }
}
