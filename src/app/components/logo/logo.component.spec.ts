import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LogoComponent } from "./logo.component";

describe("LogoComponent", () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
  });

  it("should render title", () => {
    const logoElement = fixture.nativeElement.querySelector("h1");
    expect(logoElement.textContent.trim()).toBe("PayFriends");
  });

  it("should render title with default color", () => {
    const logoPayElement = fixture.nativeElement.querySelector(".logo__pay");
    const logoFriendsElement =
      fixture.nativeElement.querySelector(".logo__friends");
    expect(logoPayElement.classList).not.toContain("logo--white");
    expect(logoFriendsElement.classList).not.toContain("logo--white");
  });

  it("should render title with white color", () => {
    component.color = "white";
    fixture.detectChanges();
    const logoPayElement = fixture.nativeElement.querySelector(".logo__pay");
    const logoFriendsElement =
      fixture.nativeElement.querySelector(".logo__friends");
    expect(logoPayElement.classList).toContain("logo--white");
    expect(logoFriendsElement.classList).toContain("logo--white");
  });
});
