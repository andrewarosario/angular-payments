import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { LogoComponentModule } from "src/app/components/logo/logo.component.module";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoginFormModule } from "./login-form/login-form.module";
import { of, throwError } from "rxjs";

import { LoginPageComponent } from "./login-page.component";
import { mockUser } from "src/app/mocks/user.mock";
import { By } from "@angular/platform-browser";
import { LoginFormComponent } from "./login-form/login-form.component";
import { Router } from "@angular/router";
import { MessageService } from "src/app/shared/message/message.service";

describe(LoginPageComponent.name, () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;
  let router: Router;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj<AuthService>("AuthService", {
      auth: of(mockUser),
    });
    messageServiceSpy = jasmine.createSpyObj<MessageService>("MessageService", [
      "open",
    ]);
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        LogoComponentModule,
        LoginFormModule,
      ],
      declarations: [LoginPageComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
  });

  it("should render title and welcome text", () => {
    const titleElement = fixture.nativeElement.querySelector("h1");
    const welcomeElement = fixture.nativeElement.querySelector("h2");
    expect(titleElement.textContent.trim()).toBe("PayFriends");
    expect(welcomeElement.textContent.trim()).toBe("Bem vindo de volta");
  });

  it("should render image with correct path and alt", () => {
    fixture.detectChanges();
    const imageElement = fixture.nativeElement.querySelector("img");
    expect(imageElement.getAttribute("src")).toBe(component.imagePath);
    expect(imageElement.getAttribute("alt")).toBe("Login image");
  });

  it("should navigate to home page when authenticating", () => {
    spyOn(router, "navigateByUrl");
    const loginFormComponent: LoginFormComponent = fixture.debugElement.query(
      By.directive(LoginFormComponent)
    ).componentInstance;
    loginFormComponent.submitForm.emit();
    expect(router.navigateByUrl).toHaveBeenCalledWith("home");
  });

  it("should display message on authentication failure", () => {
    authServiceSpy.auth.and.returnValue(throwError("login fail"));
    const loginFormComponent: LoginFormComponent = fixture.debugElement.query(
      By.directive(LoginFormComponent)
    ).componentInstance;
    loginFormComponent.submitForm.emit();
    expect(messageServiceSpy.open).toHaveBeenCalledWith("login fail");
  });
});
