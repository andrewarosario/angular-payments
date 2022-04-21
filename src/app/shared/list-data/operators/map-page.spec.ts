import { PageEvent } from "@angular/material/paginator";
import { of } from "rxjs";
import { first, skip } from "rxjs/operators";
import { SearchParams } from "../models/search-params";
import { mapPage } from "./map-page";

const mockSearchParams: SearchParams = {
  _limit: 5,
  _page: 1,
};

const mockPageEvent: PageEvent = {
  pageIndex: 1,
  previousPageIndex: 0,
  pageSize: 15,
  length: 50,
};

describe("mapPage", () => {
  it("should emit search params object first", () => {
    of(mockPageEvent)
      .pipe(mapPage(mockSearchParams), first())
      .subscribe((value) => {
        expect(value).toEqual(mockSearchParams);
      });
  });

  it("should emit mapped search params object", () => {
    of(mockPageEvent)
      .pipe(mapPage(mockSearchParams), skip(1), first())
      .subscribe((value) => {
        expect(value).toEqual({
          _limit: mockPageEvent.pageSize,
          _page: mockPageEvent.pageIndex + 1,
        });
      });
  });
});
