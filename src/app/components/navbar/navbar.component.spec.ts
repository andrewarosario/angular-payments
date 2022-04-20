import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { NavbarComponentModule } from "./navbar.component.module";

describe(NavbarComponent.name, () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponentModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it("should render title", () => {
    const logoElement = fixture.nativeElement.querySelector("h1");
    expect(logoElement.textContent.trim()).toBe("PayFriends");
  });

  it("should render user avatar with correct path and alt", () => {
    fixture.detectChanges();
    const userAvatarElement = fixture.nativeElement.querySelector("img");
    expect(userAvatarElement.getAttribute("src")).toBe(
      component.userAvatarImagePath
    );
    expect(userAvatarElement.getAttribute("alt")).toBe("User avatar");
  });
});
