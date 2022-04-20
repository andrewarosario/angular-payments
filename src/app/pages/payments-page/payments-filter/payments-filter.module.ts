import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PaymentsFilterComponent } from "./payments-filter.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [PaymentsFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  exports: [PaymentsFilterComponent],
})
export class PaymentsFilterModule {}
