import { EventEmitter, InjectionToken } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";

export interface FilterEmitter {
  pageChange: EventEmitter<PageEvent>;
  filterForm: FormGroup;
  total$: Observable<number>;
  paginator: MatPaginator;
}

export const FILTER_EMITTER = new InjectionToken<FilterEmitter>(
  "filter-emitter"
);
