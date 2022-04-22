import { PageEvent } from "@angular/material/paginator";
import { of } from "rxjs";
import { first } from "rxjs/operators";
import { mapPage } from "./map-page";

const mockPageEvent: PageEvent = {
  pageIndex: 1,
  previousPageIndex: 0,
  pageSize: 15,
  length: 50,
};

describe("mapPage", () => {
  it("should emit mapped search params object", () => {
    of(mockPageEvent)
      .pipe(mapPage(), first())
      .subscribe((value) => {
        expect(value).toEqual({
          _limit: mockPageEvent.pageSize,
          _page: mockPageEvent.pageIndex + 1,
        });
      });
  });
});
