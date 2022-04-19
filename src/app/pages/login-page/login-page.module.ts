import { NgModule } from "@angular/core";
import { LogoComponentModule } from "src/app/components/logo/logo.component.module";
import { LoginPageRoutingModule } from "./login-page-routing.module";
import { LoginPageComponent } from "./login-page.component";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [LoginPageRoutingModule, LogoComponentModule],
})
export class LoginPageModule {}
