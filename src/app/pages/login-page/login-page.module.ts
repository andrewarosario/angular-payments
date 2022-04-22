import { NgModule } from "@angular/core";
import { LogoComponentModule } from "src/app/components/logo/logo.component.module";
import { LoginFormModule } from "./login-form/login-form.module";
import { LoginPageRoutingModule } from "./login-page-routing.module";
import { LoginPageComponent } from "./login-page.component";
import { MessageModule } from "src/app/shared/message/message.module";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    LoginPageRoutingModule,
    LogoComponentModule,
    LoginFormModule,
    MessageModule,
  ],
})
export class LoginPageModule {}
