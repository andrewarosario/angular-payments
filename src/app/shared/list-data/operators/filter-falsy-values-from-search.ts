import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Params } from "src/app/shared/list-data/models/search-params";

export function filterFalsyValuesFromSearch() {
  return function (source: Observable<Params>): Observable<Params> {
    return source.pipe(
      map((search) =>
        Object.keys(search)
          .filter((key) => !!search[key])
          .reduce((acc, key) => ({ ...acc, [key]: search[key] }), {})
      )
    );
  };
}
