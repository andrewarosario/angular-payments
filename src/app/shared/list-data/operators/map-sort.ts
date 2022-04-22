import { Sort } from "@angular/material/sort";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Params } from "../models/search-params";

export function mapSort() {
  return function (source: Observable<Sort>): Observable<Params> {
    return source.pipe(
      map((sort) => ({
        _sort: sort.active,
        _order: sort.direction,
      }))
    );
  };
}
