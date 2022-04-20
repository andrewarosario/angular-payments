import { NgModule } from "@angular/core";
import { PaymentsTableComponent } from "./payments-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [PaymentsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [PaymentsTableComponent],
})
export class PaymentsTableModule {}
