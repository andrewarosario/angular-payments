import { of } from "rxjs";
import { first } from "rxjs/operators";
import { mapSearch } from "./map-search";

describe("mapSearch", () => {
  it("should emit mapped search field object", () => {
    of("title")
      .pipe(mapSearch("field"), first())
      .subscribe((value) => {
        expect(value).toEqual({ field_like: "title" });
      });
  });
});
