import { ContentChild, Directive, Inject, Input, OnInit } from "@angular/core";
import { merge, Observable } from "rxjs";
import { map, scan, startWith, switchMap } from "rxjs/operators";
import {
  Params,
  SearchParams,
} from "src/app/shared/list-data/models/search-params";
import {
  FilterEmitter,
  FILTER_EMITTER,
  ListDataApi,
  LIST_DATA_API,
  SortEmitter,
  SORT_EMITTER,
} from "../../interfaces";
import { mapPage } from "../../operators/map-page";
import { mapSearch } from "../../operators/map-search";
import { mapSort } from "../../operators/map-sort";

@Directive({
  selector: "[appListData]",
  exportAs: "appListData",
})
export class ListDataDirective<T> implements OnInit {
  @ContentChild(FILTER_EMITTER, { static: true }) filterEmitter: FilterEmitter;
  @ContentChild(SORT_EMITTER, { static: true }) sortEmitter: SortEmitter;

  @Input() searchParams: SearchParams = { _limit: 5, _page: 1 };
  @Input() searchField = "name";

  dataSource$: Observable<T[]>;

  constructor(@Inject(LIST_DATA_API) private listDataApi: ListDataApi<T>) {}

  ngOnInit(): void {
    this.dataSource$ = this.getDataSource();
    this.filterEmitter.total$ = this.getTotal();
  }

  private getDataSource(): Observable<T[]> {
    return merge(
      this.pageObserver(),
      this.sortObserver(),
      this.searchObserver()
    ).pipe(
      startWith(this.searchParams),
      scan((acc, value) => ({ ...acc, ...value })),
      switchMap((params) => this.listDataApi.list(params))
    );
  }

  private getTotal(): Observable<number> {
    return this.filterEmitter.searchControl.valueChanges.pipe(
      startWith({}),
      mapSearch(this.searchField),
      switchMap((params) => this.listDataApi.getCount(params))
    );
  }

  private searchObserver(): Observable<Params> {
    return this.filterEmitter.searchControl.valueChanges.pipe(
      mapSearch(this.searchField),
      map((search) => this.resetPagination(search))
    );
  }

  private pageObserver(): Observable<SearchParams> {
    return this.filterEmitter.pageChange.pipe(mapPage());
  }

  private sortObserver(): Observable<Params> {
    return this.sortEmitter.sortChange.pipe(mapSort());
  }

  private resetPagination(search: Params): Params {
    this.filterEmitter.paginator.firstPage();
    return { ...search, _page: 1 };
  }
}
