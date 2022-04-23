import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginForm } from "src/app/models/login-form";
import { AuthService } from "src/app/services/auth/auth.service";
import { MessageService } from "src/app/shared/message/message.service";

@Component({
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  imagePath = "assets/images/login.svg";

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  submitForm(userData: LoginForm): void {
    this.authService.auth(userData).subscribe(
      () => this.router.navigateByUrl("home"),
      (error) => this.messageService.open(error)
    );
  }
}
