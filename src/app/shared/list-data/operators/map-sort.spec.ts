import { Sort } from "@angular/material/sort";
import { of } from "rxjs";
import { first, skip } from "rxjs/operators";
import { mapSort } from "./map-sort";

const mockSort: Sort = {
  active: "title",
  direction: "asc",
};

describe("mapSort", () => {
  it("should emit empty object first", () => {
    of(mockSort)
      .pipe(mapSort(), first())
      .subscribe((value) => {
        expect(value).toEqual({});
      });
  });

  it("should emit mapped sort object", () => {
    of(mockSort)
      .pipe(mapSort(), skip(1), first())
      .subscribe((value) => {
        expect(value).toEqual({ _sort: "title", _order: "asc" });
      });
  });
});
