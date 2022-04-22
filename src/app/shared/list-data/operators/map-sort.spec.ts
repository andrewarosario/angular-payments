import { Sort } from "@angular/material/sort";
import { of } from "rxjs";
import { first } from "rxjs/operators";
import { mapSort } from "./map-sort";

const mockSort: Sort = {
  active: "title",
  direction: "asc",
};

describe("mapSort", () => {
  it("should emit mapped sort object", () => {
    of(mockSort)
      .pipe(mapSort(), first())
      .subscribe((value) => {
        expect(value).toEqual({ _sort: "title", _order: "asc" });
      });
  });
});
