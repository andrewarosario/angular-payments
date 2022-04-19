import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.scss"],
})
export class LogoComponent {
  @Input() color: "primary" | "white" = "primary";

  get isWhiteLogo(): boolean {
    return this.color === "white";
  }
}
