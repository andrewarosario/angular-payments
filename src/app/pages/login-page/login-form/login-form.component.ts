import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginForm } from "src/app/models/login-form";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  hidePassword = true;
  @Output() submitForm = new EventEmitter<LoginForm>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  changePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  submit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
