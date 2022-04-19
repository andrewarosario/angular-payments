import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginFormComponent } from "./login-form.component";
import { LoginFormModule } from "./login-form.module";

describe(LoginFormComponent.name, () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  function setFieldValue(field: string, value: string): void {
    const element = fixture.debugElement.query(By.css(`input[name=${field}]`));
    element.nativeElement.value = value;
    element.nativeElement.dispatchEvent(new Event("input"));
    element.nativeElement.dispatchEvent(new Event("blur"));
  }

  function submitForm(): void {
    const formElement = fixture.debugElement.query(By.css("form"));
    formElement.triggerEventHandler("submit", {});
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should submit the form successfully", () => {
    spyOn(component.submitForm, "emit");
    setFieldValue("email", "validemail@gmail.com");
    setFieldValue("password", "validpassword");
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector(
      "button[type=submit]"
    );
    submitForm();
    expect(buttonElement.disabled).toBe(false);
    expect(component.submitForm.emit).toHaveBeenCalledOnceWith({
      email: "validemail@gmail.com",
      password: "validpassword",
    });
  });

  it("should not submit the form if fields are empty", () => {
    spyOn(component.submitForm, "emit");
    setFieldValue("email", "");
    setFieldValue("password", "");
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector(
      "button[type=submit]"
    );
    submitForm();
    const emailRequired =
      fixture.nativeElement.querySelector("#email-required");
    const passwordRequired =
      fixture.nativeElement.querySelector("#password-required");
    expect(emailRequired).toBeTruthy();
    expect(passwordRequired).toBeTruthy();
    expect(buttonElement.disabled).toBe(true);
    expect(component.submitForm.emit).not.toHaveBeenCalled();
  });

  it("should not submit the form if email is invalid", () => {
    spyOn(component.submitForm, "emit");
    setFieldValue("email", "invalidemail");
    setFieldValue("password", "validpassword");
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector(
      "button[type=submit]"
    );
    submitForm();
    const emailInvalid = fixture.nativeElement.querySelector("#email-invalid");
    expect(emailInvalid).toBeTruthy();
    expect(buttonElement.disabled).toBe(true);
    expect(component.submitForm.emit).not.toHaveBeenCalled();
  });

  it("should not submit the form if password is invalid", () => {
    spyOn(component.submitForm, "emit");
    setFieldValue("email", "validemail@gmail.com");
    setFieldValue("password", "1234");
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector(
      "button[type=submit]"
    );
    submitForm();
    const passwordInvalid = fixture.nativeElement.querySelector(
      "#password-minlength"
    );
    expect(passwordInvalid).toBeTruthy();
    expect(buttonElement.disabled).toBe(true);
    expect(component.submitForm.emit).not.toHaveBeenCalled();
  });

  it("should change password visibility on click the visibility icon", () => {
    setFieldValue("password", "1234");
    const passwordVisibilityElement = fixture.nativeElement.querySelector(
      "#password-visibility"
    );
    passwordVisibilityElement.click();
    fixture.detectChanges();
    const passwordElement: HTMLInputElement = fixture.debugElement.query(
      By.css(`input[name=password]`)
    ).nativeElement;
    expect(passwordElement.type).toBe("text");
    passwordVisibilityElement.click();
    fixture.detectChanges();
    expect(passwordElement.type).toBe("password");
  });
});
