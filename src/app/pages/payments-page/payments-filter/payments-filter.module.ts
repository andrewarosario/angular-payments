import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PaymentsFilterComponent } from "./payments-filter.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { CurrencyModule } from "src/app/core/currency/currency.module";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [PaymentsFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    CurrencyModule,
  ],
  exports: [PaymentsFilterComponent],
})
export class PaymentsFilterModule {}
