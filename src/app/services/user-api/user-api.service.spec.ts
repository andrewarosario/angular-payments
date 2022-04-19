import { UserApiService } from "./user-api.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { mockUser } from "src/app/mocks/user.mock";
import { environment } from "src/environments/environment";
import { User } from "src/app/models/user";

describe(UserApiService.name, () => {
  let service: UserApiService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserApiService],
    }).compileComponents();

    service = TestBed.inject(UserApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it(`#${UserApiService.prototype.getUser.name} should return
      user`, (done) => {
    const userData: Partial<User> = {
      email: "validemail@mail.com",
      password: "validpassword",
    };

    service.getUser(userData).subscribe((user) => {
      expect(user).toEqual(mockUser);
      done();
    });

    const queryStringParams = `?email=${userData.email}&password=${userData.password}`;
    httpController
      .expectOne(`${environment.urlApi}/account${queryStringParams}`)
      .flush([mockUser]);
  });
});
