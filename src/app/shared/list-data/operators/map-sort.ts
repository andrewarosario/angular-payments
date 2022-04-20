import { Sort } from "@angular/material/sort";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

export function mapSort() {
  return function (source: Observable<Sort>) {
    return source.pipe(
      map((sort) => ({
        _sort: sort.active,
        _order: sort.direction,
      })),
      startWith({})
    );
  };
}
