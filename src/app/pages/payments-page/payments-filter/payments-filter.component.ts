import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { PAGE_SIZE_OPTIONS } from "src/app/shared/list-data/constants/page-size-options";
import { SearchParams } from "src/app/shared/list-data/models/search-params";
import {
  FILTER_EMITTER,
  FilterEmitter,
} from "src/app/shared/list-data/interfaces/filter-emitter.interface";
import { Observable } from "rxjs";
import { fade } from "src/app/animations/fade";

@Component({
  selector: "app-payments-filter",
  templateUrl: "./payments-filter.component.html",
  styleUrls: ["./payments-filter.component.scss"],
  providers: [
    { provide: FILTER_EMITTER, useExisting: PaymentsFilterComponent },
  ],
  animations: [fade],
})
export class PaymentsFilterComponent implements FilterEmitter {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() searchParams: SearchParams;
  @Output() pageChange = new EventEmitter<PageEvent>();
  showFilters = false;

  total$: Observable<number>;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  filterForm = new FormGroup({
    name_like: new FormControl(""),
    title_like: new FormControl(""),
    value_gte: new FormControl(null),
    value_lte: new FormControl(null),
    isPayed: new FormControl(""),
  });

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
    if (!this.showFilters) {
      this.filterForm.reset();
    }
  }
}
