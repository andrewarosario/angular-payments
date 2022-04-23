import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { mockUser } from "src/app/mocks/user.mock";
import { AuthUserStore } from "src/app/store/auth-user/auth-user.store";

import { LoggedUserGuard } from "./logged-user.guard";

describe(LoggedUserGuard.name, () => {
  let guard: LoggedUserGuard;
  let authUserStore: AuthUserStore;
  let routerSpy: Router;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>("Router", ["navigateByUrl"]);
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }],
    });

    guard = TestBed.inject(LoggedUserGuard);
    authUserStore = TestBed.inject(AuthUserStore);
  });

  it("should return true when not authenticated", () => {
    authUserStore.setUser(null);
    guard.canLoad().subscribe((isNotAuthenticated) => {
      expect(isNotAuthenticated).toBe(true);
    });
  });

  it("should return false when authenticated", () => {
    authUserStore.setUser(mockUser);
    guard.canLoad().subscribe((isNotAuthenticated) => {
      expect(isNotAuthenticated).toBe(false);
    });
  });

  it("should navigate to home page when authenticated", () => {
    authUserStore.setUser(mockUser);
    guard.canLoad().subscribe(() => {
      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("home");
    });
  });
});
