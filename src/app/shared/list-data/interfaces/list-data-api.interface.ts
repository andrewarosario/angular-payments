import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Params } from "src/app/shared/list-data/models/search-params";

export interface ListDataApi<T> {
  list(params: Params): Observable<T[]>;
  getCount(params: Params): Observable<number>;
}

export const LIST_DATA_API = new InjectionToken<ListDataApi<unknown>>(
  "list-data-api"
);
