import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Payment } from "src/app/models/payment";

@Component({
  selector: "app-payment-delete-modal",
  templateUrl: "./payment-delete-modal.component.html",
  styleUrls: ["./payment-delete-modal.component.scss"],
})
export class PaymentDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PaymentDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public payment: Payment
  ) {}

  delete(): void {
    this.dialogRef.close(this.payment);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
