import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  @Output() logout = new EventEmitter<void>();
  userAvatarImagePath = "assets/images/user-avatar.svg";
}
