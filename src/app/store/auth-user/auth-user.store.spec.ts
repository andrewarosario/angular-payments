import { take, toArray } from "rxjs/operators";
import { mockUser } from "src/app/mocks/user.mock";
import { AuthUserStore } from "./auth-user.store";

describe(AuthUserStore.name, () => {
  it("should get user from store", () => {
    const authUserStore = new AuthUserStore();
    authUserStore.user$.pipe(take(2), toArray()).subscribe((result) => {
      expect(result).toEqual([null, mockUser]);
    });
    authUserStore.setUser(mockUser);
  });
});
