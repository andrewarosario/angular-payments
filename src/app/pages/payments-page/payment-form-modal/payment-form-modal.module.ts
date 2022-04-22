import { NgModule } from "@angular/core";
import { PaymentFormModalComponent } from "./payment-form-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";
import { CurrencyModule } from "src/app/core/currency/currency.module";

@NgModule({
  declarations: [PaymentFormModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    CurrencyModule,
  ],
  exports: [PaymentFormModalComponent],
})
export class PaymentFormModalModule {}
