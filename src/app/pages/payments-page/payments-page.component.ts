import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { filter, switchMap, tap } from "rxjs/operators";
import { Payment } from "src/app/models/payment";
import { PaymentApiService } from "src/app/services/payment-api/payment-api.service";
import { ListDataDirective } from "src/app/shared/list-data/directives/list-data/list-data.directive";
import { MessageService } from "src/app/shared/message/message.service";
import { PaymentDeleteModalComponent } from "./payment-delete-modal/payment-delete-modal.component";
import { PaymentFormModalComponent } from "./payment-form-modal/payment-form-modal.component";

@Component({
  templateUrl: "./payments-page.component.html",
  styleUrls: ["./payments-page.component.scss"],
})
export class PaymentsPageComponent {
  @ViewChild(ListDataDirective, { static: true })
  listDataDirective: ListDataDirective<Payment>;

  constructor(
    private paymentApiService: PaymentApiService,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  openFormModal(payment?: Payment | undefined): void {
    const dialogRef = this.dialog.open(PaymentFormModalComponent, {
      width: "900px",
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
        }),
        tap(() => this.listDataDirective.update())
      )
      .subscribe(() => this.messageService.open("Pagamento salvo!"));
  }

  openDeleteModal(payment: Payment): void {
    const dialogRef = this.dialog.open(PaymentDeleteModalComponent, {
      data: payment,
      width: "450px",
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((paymentToDelete: Payment) =>
          this.paymentApiService.delete(paymentToDelete.id)
        ),
        tap(() => this.listDataDirective.update())
      )
      .subscribe(() => this.messageService.open("Pagamento excluído!"));
  }

  togglePayed(payment: Payment): void {
    this.paymentApiService
      .update(payment.id, { isPayed: !payment.isPayed })
      .subscribe();
  }
}
