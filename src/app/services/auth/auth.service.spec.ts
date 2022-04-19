import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { mockUser } from "src/app/mocks/user.mock";
import { UserApiService } from "../user-api/user-api.service";

import { AuthService } from "./auth.service";

describe(AuthService.name, () => {
  let service: AuthService;
  let userApiServiceSpy: jasmine.SpyObj<UserApiService>;

  beforeEach(() => {
    userApiServiceSpy = jasmine.createSpyObj<UserApiService>("UserApiService", [
      "getUser",
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: UserApiService, useValue: userApiServiceSpy }],
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
});
