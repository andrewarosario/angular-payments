import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { mockUser } from "../../mocks/user.mock";
import { AuthUserStore } from "../../store/auth-user/auth-user.store";

import { AuthGuard } from "./auth.guard";

describe(AuthGuard.name, () => {
  let guard: AuthGuard;
  let authUserStore: AuthUserStore;
  let routerSpy: Router;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>("Router", ["navigateByUrl"]);
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }],
    });

    guard = TestBed.inject(AuthGuard);
    authUserStore = TestBed.inject(AuthUserStore);
  });

  it("should return true when authenticated", () => {
    authUserStore.setUser(mockUser);
    guard.canLoad().subscribe((isAuthenticated) => {
      expect(isAuthenticated).toBe(true);
    });
  });

  it("should return false when not authenticated", () => {
    authUserStore.setUser(null);
    guard.canLoad().subscribe((isAuthenticated) => {
      expect(isAuthenticated).toBe(false);
    });
  });

  it("should navigate to login page when not authenticated", () => {
    authUserStore.setUser(null);
    guard.canLoad().subscribe(() => {
      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("login");
    });
  });
});
