import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { FormControl, FormGroup } from "@angular/forms";
import {
  PageEvent,
  MatPaginator,
  MatPaginatorModule,
} from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { Observable, of } from "rxjs";
import {
  FilterEmitter,
  FILTER_EMITTER,
  ListDataApi,
  SortEmitter,
  SORT_EMITTER,
} from "../../interfaces";
import { ListDataModule } from "../../list-data.module";
import { Params } from "../../models/search-params";
import { ListDataDirective } from "./list-data.directive";

interface MockData {
  value: string;
}

class MockDataApi implements ListDataApi<MockData> {
  list(params: Params): Observable<MockData[]> {
    return of([{ value: "any value" }, { value: "other value" }]);
  }
  getCount(params: Params): Observable<number> {
    return of(2);
  }
}

@Component({
  selector: "filter-emitter",
  template: `
    <mat-paginator
      [pageSizeOptions]="[5]"
      [pageSize]="5"
      [length]="total$ | async"
      (page)="pageChange.emit($event)"
    ></mat-paginator>
  `,
  providers: [
    { provide: FILTER_EMITTER, useExisting: FilterEmitterMockComponent },
  ],
})
class FilterEmitterMockComponent implements FilterEmitter {
  @Output() pageChange = new EventEmitter<PageEvent>();
  filterForm = new FormGroup({ value: new FormControl("") });
  total$: Observable<number>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
}

@Component({
  template: "",
  selector: "sort-emitter",
  providers: [{ provide: SORT_EMITTER, useExisting: SortEmitterMockComponent }],
})
class SortEmitterMockComponent implements SortEmitter {
  @Output() sortChange = new EventEmitter<Sort>();
}

@Component({
  template: `
    <div appListData #appListData="appListData">
      {{ appListData.dataSource$ | async | json }}
      {{ appListData.total$ | async }}
      <filter-emitter></filter-emitter>
      <sort-emitter></sort-emitter>
    </div>
  `,
})
class HostComponent {
  @ViewChild(FilterEmitterMockComponent, { static: true })
  filterEmitter: FilterEmitter;
  @ViewChild(SortEmitterMockComponent, { static: true })
  sortEmitter: SortEmitter;
  @ViewChild(ListDataDirective, { static: true })
  listDataDirective: ListDataDirective<MockData>;
}

describe(ListDataDirective.name, () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FilterEmitterMockComponent,
        SortEmitterMockComponent,
        HostComponent,
      ],
      imports: [MatPaginatorModule, ListDataModule.forRoot(MockDataApi)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
  });

  it("should update data source at every emission", fakeAsync(() => {
    let dataSourceCalls = 0;
    let totalCalls = 0;
    fixture.detectChanges();
    component.listDataDirective.dataSource$.subscribe(() => dataSourceCalls++);
    component.listDataDirective.filterEmitter.total$.subscribe(
      () => totalCalls++
    );
    component.filterEmitter.filterForm.patchValue({
      value: "changed",
    });
    tick(300);
    component.sortEmitter.sortChange.emit({
      active: "value",
      direction: "asc",
    });
    tick(300);
    component.filterEmitter.pageChange.emit({
      length: 1,
      pageIndex: 0,
      pageSize: 5,
    });
    tick(300);
    expect(dataSourceCalls).toBe(4);
    expect(totalCalls).toBe(1);
  }));

  it("should reset pagination when search change", fakeAsync(() => {
    spyOn(component.filterEmitter.paginator, "firstPage");
    fixture.detectChanges();
    component.filterEmitter.filterForm.patchValue({
      value: "changed",
    });
    tick(300);
    expect(component.filterEmitter.paginator.firstPage).toHaveBeenCalled();
  }));
});
