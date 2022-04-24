import { of } from "rxjs";
import { filterFalsyValuesFromSearch } from "./filter-falsy-values-from-search";

describe("filterFalsyValuesFromSearch", () => {
  it("should filter falsy values from search", () => {
    const search = { a: "", b: "truthy value", c: 0 };
    of(search)
      .pipe(filterFalsyValuesFromSearch())
      .subscribe((result) => {
        expect(result).toEqual({ b: "truthy value" });
      });
  });
});
