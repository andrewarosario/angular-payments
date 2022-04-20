import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PageEvent } from "@angular/material/paginator";
import { PAGE_SIZE_OPTIONS } from "src/app/shared/list-data/constants/page-size-options";
import { SearchParams } from "src/app/shared/list-data/models/search-params";
import {
  FILTER_EMITTER,
  FilterEmitter,
} from "src/app/shared/list-data/interfaces/filter-emitter.interface";

@Component({
  selector: "app-payments-filter",
  templateUrl: "./payments-filter.component.html",
  styleUrls: ["./payments-filter.component.scss"],
  providers: [
    { provide: FILTER_EMITTER, useExisting: PaymentsFilterComponent },
  ],
})
export class PaymentsFilterComponent implements FilterEmitter {
  @Input() total = 0;
  @Input() searchParams: SearchParams;
  @Output() pageChange = new EventEmitter<PageEvent>();

  searchControl = new FormControl();
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
}
