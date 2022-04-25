import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { NavbarComponentModule } from "src/app/components/navbar/navbar.component.module";
import { AuthService } from "src/app/services/auth/auth.service";

import { HomePageComponent } from "./home-page.component";

describe(HomePageComponent.name, () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj<AuthService>("AuthService", [
      "logout",
    ]);
    routerSpy = jasmine.createSpyObj<Router>("Router", ["navigateByUrl"]);
    await TestBed.configureTestingModule({
      imports: [NavbarComponentModule],
      declarations: [HomePageComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceSpy,
        },
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
  });

  it("should call #authService.logout when logout", () => {
    const navbar: NavbarComponent = fixture.debugElement.query(
      By.directive(NavbarComponent)
    ).componentInstance;
    navbar.logout.emit();
    expect(authServiceSpy.logout).toHaveBeenCalled();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("login");
  });
});
