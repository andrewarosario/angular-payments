import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Sort } from "@angular/material/sort";
import { Payment } from "src/app/models/payment";
import {
  SortEmitter,
  SORT_EMITTER,
} from "src/app/shared/list-data/interfaces/sort-emitter.interface";

@Component({
  selector: "app-payments-table",
  templateUrl: "./payments-table.component.html",
  styleUrls: ["./payments-table.component.scss"],
  providers: [{ provide: SORT_EMITTER, useExisting: PaymentsTableComponent }],
})
export class PaymentsTableComponent implements SortEmitter {
  @Input() payments: Payment[] = [];
  @Output() sortChange = new EventEmitter<Sort>();
  @Output() edit = new EventEmitter<Payment>();
  @Output() delete = new EventEmitter<Payment>();
  @Output() togglePayed = new EventEmitter<Payment>();

  readonly displayedColumns: string[] = [
    "name",
    "title",
    "date",
    "value",
    "isPayed",
    "actions",
  ];
}
