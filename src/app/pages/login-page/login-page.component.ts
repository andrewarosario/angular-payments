import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { LoginForm } from "src/app/models/login-form";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  imagePath = "assets/images/login.svg";

  constructor(
    private authService: AuthService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  submitForm(userData: LoginForm): void {
    this.authService.auth(userData).subscribe(
      () => this.router.navigateByUrl("payments"),
      (err) =>
        this.matSnackBar.open(err, "Fechar", {
          verticalPosition: "top",
          duration: 2000,
        })
    );
  }
}
