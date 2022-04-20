import { EventEmitter, InjectionToken } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PageEvent } from "@angular/material/paginator";

export interface FilterEmitter {
  pageChange: EventEmitter<PageEvent>;
  searchControl: FormControl;
}

export const FILTER_EMITTER = new InjectionToken<FilterEmitter>(
  "filter-emitter"
);
