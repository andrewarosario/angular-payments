import { ContentChild, Directive, Inject, Input, OnInit } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
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
  total$: Observable<number>;

  constructor(@Inject(LIST_DATA_API) private listDataApi: ListDataApi<T>) {}

  ngOnInit(): void {
    this.dataSource$ = this.getDataSource();
    this.total$ = this.getTotal();
  }

  private getDataSource(): Observable<T[]> {
    return combineLatest([
      this.pageObserver(),
      this.sortObserver(),
      this.searchObserver(),
    ]).pipe(
      map(([page, sort, search]) => ({ ...page, ...sort, ...search })),
      switchMap((params) => this.listDataApi.list(params))
    );
  }

  private getTotal(): Observable<number> {
    return this.searchObserver().pipe(
      switchMap((params) => this.listDataApi.getCount(params))
    );
  }

  private searchObserver(): Observable<Params> {
    return this.filterEmitter.searchControl.valueChanges.pipe(
      mapSearch(this.searchField)
    );
  }

  private pageObserver(): Observable<SearchParams> {
    return this.filterEmitter.pageChange.pipe(mapPage(this.searchParams));
  }

  private sortObserver() {
    return this.sortEmitter.sortChange.pipe(mapSort());
  }
}
