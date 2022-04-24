import { ContentChild, Directive, Inject, Input, OnInit } from "@angular/core";
import { BehaviorSubject, merge, Observable } from "rxjs";
import { debounceTime, map, scan, startWith, switchMap } from "rxjs/operators";
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
import { filterFalsyValuesFromSearch } from "../../operators/filter-falsy-values-from-search";
import { mapSort } from "../../operators/map-sort";

@Directive({
  selector: "[appListData]",
  exportAs: "appListData",
})
export class ListDataDirective<T> implements OnInit {
  @ContentChild(FILTER_EMITTER, { static: true }) filterEmitter: FilterEmitter;
  @ContentChild(SORT_EMITTER, { static: true }) sortEmitter: SortEmitter;

  @Input() searchParams: SearchParams = { _limit: 5, _page: 1 };

  dataSource$: Observable<T[]>;
  private updateSource$ = new BehaviorSubject<SearchParams | null>(
    this.searchParams
  );

  constructor(@Inject(LIST_DATA_API) private listDataApi: ListDataApi<T>) {}

  ngOnInit(): void {
    this.dataSource$ = this.getDataSource();
    this.filterEmitter.total$ = this.getTotal();
  }

  update(): void {
    this.updateSource$.next(null);
  }

  private getDataSource(): Observable<T[]> {
    return merge(
      this.pageObserver(),
      this.sortObserver(),
      this.searchObserver(),
      this.updateSource$
    ).pipe(
      scan((acc, value) => ({ ...acc, ...value })),
      filterFalsyValuesFromSearch(),
      switchMap((params) => this.listDataApi.list(params))
    );
  }

  private getTotal(): Observable<number> {
    return this.filterEmitter.filterForm.valueChanges.pipe(
      startWith({}),
      debounceTime(300),
      filterFalsyValuesFromSearch(),
      switchMap((params) => this.listDataApi.getCount(params))
    );
  }

  private searchObserver(): Observable<Params> {
    return this.filterEmitter.filterForm.valueChanges.pipe(
      debounceTime(300),
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
