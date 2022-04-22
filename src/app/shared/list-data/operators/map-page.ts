import { PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SearchParams } from "src/app/shared/list-data/models/search-params";

export function mapPage() {
  return function (source: Observable<PageEvent>): Observable<SearchParams> {
    return source.pipe(
      map((page) => ({
        _limit: page.pageSize,
        _page: page.pageIndex + 1,
      }))
    );
  };
}
