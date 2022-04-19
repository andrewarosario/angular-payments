import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Storage } from "src/app/core/storage/storage";
import { mockUser } from "src/app/mocks/user.mock";
import { AUTH_USER_KEY } from "src/app/models/auth-user-key";
import { AuthUserStore } from "src/app/store/auth-user/auth-user.store";
import { UserApiService } from "../user-api/user-api.service";

import { AuthService } from "./auth.service";

describe(AuthService.name, () => {
  let service: AuthService;
  let userApiServiceSpy: jasmine.SpyObj<UserApiService>;
  let authUserStoreSpy: jasmine.SpyObj<AuthUserStore>;
  let storageSpy: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    userApiServiceSpy = jasmine.createSpyObj<UserApiService>("UserApiService", [
      "getUser",
    ]);
    authUserStoreSpy = jasmine.createSpyObj<AuthUserStore>("AuthUserStore", [
      "setUser",
    ]);
    storageSpy = jasmine.createSpyObj<Storage>("Storage", ["setData"]);

    TestBed.configureTestingModule({
      providers: [
        { provide: UserApiService, useValue: userApiServiceSpy },
        { provide: AuthUserStore, useValue: authUserStoreSpy },
        { provide: Storage, useValue: storageSpy },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it("should retrieve user", (done) => {
    userApiServiceSpy.getUser.and.returnValue(of(mockUser));
    service.auth(mockUser).subscribe((res) => {
      expect(res).toEqual(mockUser);
      done();
    });
  });

  it("should throw error on authentication failure", (done) => {
    userApiServiceSpy.getUser.and.returnValue(of(null));
    service.auth(mockUser).subscribe({
      error: (err) => {
        expect(err).toEqual(Error("Usuário ou senha inválidos"));
        done();
      },
    });
  });

  it("should set user to auth store and save to storage", (done) => {
    userApiServiceSpy.getUser.and.returnValue(of(mockUser));
    service.auth(mockUser).subscribe(() => {
      expect(authUserStoreSpy.setUser).toHaveBeenCalledWith(mockUser);
      expect(storageSpy.setData).toHaveBeenCalledWith(AUTH_USER_KEY, mockUser);
      done();
    });
  });
});
