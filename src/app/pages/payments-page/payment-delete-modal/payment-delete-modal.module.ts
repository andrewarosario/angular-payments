import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { PaymentDeleteModalComponent } from "./payment-delete-modal.component";

@NgModule({
  declarations: [PaymentDeleteModalComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [PaymentDeleteModalComponent],
})
export class PaymentDeleteModalModule {}
