import { EventEmitter, InjectionToken } from "@angular/core";
import { Sort } from "@angular/material/sort";

export interface SortEmitter {
  sortChange: EventEmitter<Sort>;
}

export const SORT_EMITTER = new InjectionToken<SortEmitter>("sort-emitter");
