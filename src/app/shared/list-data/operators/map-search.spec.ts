import { of } from "rxjs";
import { first, skip } from "rxjs/operators";
import { mapSearch } from "./map-search";

describe("mapSearch", () => {
  it("should emit search field object first", () => {
    of("title")
      .pipe(mapSearch("field"), first())
      .subscribe((value) => {
        expect(value).toEqual({ field_like: "" });
      });
  });

  it("should emit mapped search field object", () => {
    of("title")
      .pipe(mapSearch("field"), skip(1), first())
      .subscribe((value) => {
        expect(value).toEqual({ field_like: "title" });
      });
  });
});
