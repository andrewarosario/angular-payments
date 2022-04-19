import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LogoComponentModule } from "src/app/components/logo/logo.component.module";
import { LoginFormModule } from "./login-form/login-form.module";

import { LoginPageComponent } from "./login-page.component";

describe(LoginPageComponent.name, () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, LogoComponentModule, LoginFormModule],
      declarations: [LoginPageComponent],
    }).compileComponents();
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
});
