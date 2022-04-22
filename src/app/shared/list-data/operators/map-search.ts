import { Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from "rxjs/operators";
import { Params } from "src/app/shared/list-data/models/search-params";

export function mapSearch(searchField: string) {
  return function (source: Observable<string>): Observable<Params> {
    return source.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((search: string) => ({ [searchField + "_like"]: search }))
    );
  };
}
