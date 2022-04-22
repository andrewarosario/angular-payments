import { EventEmitter, InjectionToken } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";

export interface FilterEmitter {
  pageChange: EventEmitter<PageEvent>;
  searchControl: FormControl;
  total$: Observable<number>;
  paginator: MatPaginator;
}

export const FILTER_EMITTER = new InjectionToken<FilterEmitter>(
  "filter-emitter"
);
