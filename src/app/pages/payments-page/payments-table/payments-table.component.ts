import { Component, Input, OnInit } from "@angular/core";
import { mockPayments } from "src/app/mocks/payments.mock";
import { Payment } from "src/app/models/payment";

@Component({
  selector: "app-payments-table",
  templateUrl: "./payments-table.component.html",
  styleUrls: ["./payments-table.component.scss"],
})
export class PaymentsTableComponent implements OnInit {
  @Input() payments: Payment[] = mockPayments;
  readonly displayedColumns: string[] = [
    "name",
    "title",
    "date",
    "value",
    "isPayed",
    "actions",
  ];

  constructor() {}

  ngOnInit(): void {}
}
